const router = require('express').Router();
const crudService = require('../../services/crudService');
const validationMiddleware = require('./../../middlewares/validation');
const ProductModel = require('./../../models/Product');
const { SCHEMAS, SCHEMAS_TYPE } = require('./../../shared/constants');

router.get(
    '/',
    (req, res) => crudService.findAll(ProductModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findAll(ProductModel, res, req.params.id)
);

router.post(
    '/',
    validationMiddleware(SCHEMAS.PRODUCT, SCHEMAS_TYPE.CREATE),
    (req, res) => crudService.save(ProductModel, res, req.body)
);

router.put(
    '/:id',
    validationMiddleware(SCHEMAS.PRODUCT, SCHEMAS_TYPE.UPDATE),
    (req, res) => crudService.updateById(ProductModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(ProductModel, res, req.params.id)
);

module.exports = router;
