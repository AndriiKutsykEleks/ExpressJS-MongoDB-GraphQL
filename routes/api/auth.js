const router = require('express').Router();
const config = require('./../../config');
const jwt = require('jsonwebtoken');
const { crudService, sendService } = require('./../../services');
const { validationMiddleware } = require('./../../middlewares');
const { UserModel } = require('./../../models');
const { SCHEMAS, SCHEMAS_TYPE } = require('./../../shared/constants');

router.post(
    '/login',
    validationMiddleware(SCHEMAS.USER, SCHEMAS_TYPE.READ),
    (req, res) => {
        const errorMsg = 'Invalid Password / User Name';

        crudService
            .findByKey(UserModel, res, { email: req.body.email} , false)
            .then(user => {
                user.comparePassword(req.body.password, (error, isMatch) => {
                    if (isMatch) {
                        const token = jwt.sign({ userId: user.id }, config.jwt.privateKey);

                        sendService.sendSuccess(res, {
                            userId: user.id,
                            userName: user.firstName,
                            token
                        });
                    } else {
                        sendService.sendError(res, errorMsg, 400);
                    }
                })
            })
            .catch(() => {
                sendService.sendError(res, errorMsg, 400);
            });
    }
);

module.exports = router;
