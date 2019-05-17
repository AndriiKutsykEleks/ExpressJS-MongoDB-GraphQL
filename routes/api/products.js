const router = require('express').Router();
const crudService = require('../../services/crudService');
const ProductModel = require('./../../models/Product');

router.get('/', (req, res) => {
    crudService.findAll(ProductModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(ProductModel, res, req.params.id);
});

router.post('/', (req, res) => {
    crudService.save(ProductModel, res, req.body);
});

router.put('/:id', (req, res) => {
    crudService.updateById(ProductModel, res, req);
});

router.delete('/:id', (req, res) => {
    crudService.deleteById(ProductModel, res, req.params.id);
});

module.exports = router;
