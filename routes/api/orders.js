const router = require('express').Router();
const { crudService } = require('./../../services');
const { dependencyMiddleware, validationMiddleware } = require('./../../middlewares');
const { OrderModel, ProductModel, UserModel } = require('./../../models');
const { SCHEMAS, SCHEMAS_TYPE } = require('./../../shared/constants');

router.get(
    '/',
    (req, res) => crudService.findAll(OrderModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findById(OrderModel, res, req.params.id)
);

router.post(
    '/',
    validationMiddleware(SCHEMAS.ORDER, SCHEMAS_TYPE.CREATE),
    dependencyMiddleware(ProductModel, 'products'),
    dependencyMiddleware(UserModel, 'userId'),
    (req, res) => crudService.save(OrderModel, res, req.body)
);

router.put(
    '/:id',
    validationMiddleware(SCHEMAS.ORDER, SCHEMAS_TYPE.UPDATE),
    dependencyMiddleware(ProductModel, 'products'),
    dependencyMiddleware(UserModel, 'userId'),
    (req, res) => crudService.updateById(OrderModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(OrderModel, res, req.params.id)
);

module.exports = router;
