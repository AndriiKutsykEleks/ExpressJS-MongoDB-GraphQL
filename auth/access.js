const config = require('./../config');
const jwt = require('jsonwebtoken');
const { crudService, errorService } = require('./../services');
const { UserModel } = require('./../models');
const { URLS } = require('./../shared/constants');

const access = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, config.jwt.privateKey, (err, payload) => {
            if (payload) {
                crudService
                    .findById(UserModel, res, payload.userId, false)
                    .then(doc => {
                        req.user = doc;
                        next();
                    })
            } else {
                next();
            }
        });
    } catch (error){
        let access = false;

        URLS.access.forEach(item => {
            if (!access && req.url.includes(item.path) && item.methods.includes(req.method)) {
                access = true
            }
        });

        access ? next() : errorService.sendError(res, 'User Not Authorized', 401);
    }
};

module.exports = access;
