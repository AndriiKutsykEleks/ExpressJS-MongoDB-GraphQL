const router = require('express').Router();
const { crudService } = require('./../../services');
const { dependencyMiddleware, validationMiddleware } = require('./../../middlewares');
const { CategoryModel, ProductModel } = require('./../../models');
const { SCHEMAS, SCHEMAS_TYPE } = require('./../../shared/constants');

router.get(
    '/',
    (req, res) => crudService.findAll(ProductModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findById(ProductModel, res, req.params.id)
);

router.post(
    '/',
    validationMiddleware(SCHEMAS.PRODUCT, SCHEMAS_TYPE.CREATE),
    dependencyMiddleware(CategoryModel, 'categoryId'),
    (req, res) => crudService.save(ProductModel, res, req.body)
);

router.put(
    '/:id',
    validationMiddleware(SCHEMAS.PRODUCT, SCHEMAS_TYPE.UPDATE),
    dependencyMiddleware(CategoryModel, 'categoryId'),
    (req, res) => crudService.updateById(ProductModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(ProductModel, res, req.params.id)
);

module.exports = router;
