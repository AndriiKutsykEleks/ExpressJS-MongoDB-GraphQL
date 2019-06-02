const router = require('express').Router();
const crudService = require('../../services/crudService');
const validationMiddleware = require('./../../middlewares/validation');
const OrderModel = require('./../../models/Order');

const VALID_TYPE = 'order';

router.get(
    '/',
    (req, res) => crudService.findAll(OrderModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findAll(OrderModel, res, req.params.id)
);

router.post(
    '/',
    (req, res, next) => validationMiddleware(req, res, next, VALID_TYPE),
    (req, res) => crudService.save(OrderModel, res, req.body)
);

router.put(
    '/:id',
    (req, res, next) => validationMiddleware(req, res, next, VALID_TYPE),
    (req, res) => crudService.updateById(OrderModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(OrderModel, res, req.params.id)
);

module.exports = router;
