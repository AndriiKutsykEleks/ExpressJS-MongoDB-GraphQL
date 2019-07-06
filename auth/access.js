const config = require('./../config');
const jwt = require('jsonwebtoken');
const { crudService, sendService } = require('./../services');
const { UserModel } = require('./../models');
const { URLS } = require('./../shared/constants');

const access = async (req, res, next) => {
    await isAuthorized(req, res) ? next() : hasPermissions(req, res, next);
};

const isAuthorized = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        return await jwt.verify(token, config.jwt.privateKey, (error, payload) => {
            if (error) {
                throw new Error();
            }

            if (payload) {
                return crudService
                    .findById(UserModel, res, payload.userId, false)
                    .then(result => !(result instanceof Error));
            } else {
                throw new Error();
            }
        });
    } catch (error) {
        return false;
    }
};

const hasPermissions = (req, res, next) => {
    const permission = URLS.access.some(item => {
        return req.url.includes(item.path) && item.methods.includes(req.method);
    });

    permission ? next() : sendService.sendError(res, 'User Not Authorized', 401);
};

module.exports = access;
