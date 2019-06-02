const router = require('express').Router();
const crudService = require('./../../services/crudService');
const validationMiddleware = require('./../../middlewares/validation');
const UserModel = require('./../../models/User');

const VALID_TYPE = 'user';

router.get(
    '/',
    (req, res) => crudService.findAll(UserModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findAll(UserModel, res, req.params.id)
);

router.post(
    '/',
    validationMiddleware(VALID_TYPE),
    (req, res) => crudService.save(UserModel, res, req.body)
);

router.put(
    '/:id',
    validationMiddleware(VALID_TYPE),
    (req, res) => crudService.updateById(UserModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(UserModel, res, req.params.id)
);

module.exports = router;
