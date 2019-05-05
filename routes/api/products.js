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

router.put('/', (req, res) => {
    crudService.updateById(ProductModel, res, req.body);
});

router.delete('/', (req, res) => {
    crudService.deleteById(ProductModel, res, req.body._id);
});

module.exports = router;
