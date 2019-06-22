const router = require('express').Router();
const config = require('./../../config');
const jwt = require('jsonwebtoken');
const { crudService, errorService } = require('./../../services');
const { validationMiddleware } = require('./../../middlewares');
const { UserModel } = require('./../../models');
const { SCHEMAS, SCHEMAS_TYPE } = require('./../../shared/constants');

router.post(
    '/login',
    validationMiddleware(SCHEMAS.USER, SCHEMAS_TYPE.READ),
    (req, res) => {
        const errorMsg = 'Invalid Password / User Name';

        crudService
            .findByKey(UserModel, res, { firstName: req.body.firstName} , false)
            .then(user => {
                user.comparePassword(req.body.password, (error, isMatch) => {
                    if (isMatch) {
                        const token = jwt.sign({ userId: user.id }, config.jwt.privateKey);

                        res.status(200).json({
                            userId: user.id,
                            userName: user.firstName,
                            token
                        });
                    } else {
                        errorService.sendError(res, errorMsg, 400);
                    }
                })
            })
            .catch(() => {
                errorService.sendError(res, errorMsg, 400);
            });
    }
);

module.exports = router;
