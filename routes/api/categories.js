const router = require('express').Router();
const crudService = require('../../services/crudService');
const CategoryModel = require('./../../models/Category');

router.get('/', (req, res) => {
    crudService.findAll(CategoryModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(CategoryModel, res, req.params.id);
});

router.post('/', (req, res) => {
    crudService.save(CategoryModel, res, req.body);
});

router.put('/:id', (req, res) => {
    crudService.updateById(CategoryModel, res, req);
});

router.delete('/:id', (req, res) => {
    crudService.deleteById(CategoryModel, res, req.params.id);
});

module.exports = router;
