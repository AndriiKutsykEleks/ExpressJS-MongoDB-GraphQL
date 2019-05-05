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

router.put('/', (req, res) => {
    crudService.updateById(CategoryModel, res, req.body);
});

router.delete('/', (req, res) => {
    crudService.deleteById(CategoryModel, res, req.body._id);
});

module.exports = router;
