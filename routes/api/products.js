const router = require('express').Router();
const crudService = require('../../services/crudService');
const validateService = require('./../../services/validateService');
const ProductModel = require('./../../models/Product');

const VALID_TYPE = 'product';

router.get('/', (req, res) => {
    crudService.findAll(ProductModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(ProductModel, res, req.params.id);
});

router.post('/', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.save(ProductModel, res, req.body);
    }
});

router.put('/:id', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.updateById(ProductModel, res, req);
    }
});

router.delete('/:id', (req, res) => {
    crudService.deleteById(ProductModel, res, req.params.id);
});

module.exports = router;
