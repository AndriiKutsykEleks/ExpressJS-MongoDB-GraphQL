const router = require('express').Router();
const crudService = require('../../services/crudService');
const validationMiddleware = require('./../../middlewares/validation');
const ProductModel = require('./../../models/Product');

const VALID_TYPE = 'product';

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
    validationMiddleware(VALID_TYPE),
    (req, res) => crudService.save(ProductModel, res, req.body)
);

router.put(
    '/:id',
    validationMiddleware(VALID_TYPE),
    (req, res) => crudService.updateById(ProductModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(ProductModel, res, req.params.id)
);

module.exports = router;
