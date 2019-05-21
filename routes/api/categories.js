const router = require('express').Router();
const crudService = require('../../services/crudService');
const validateService = require('./../../services/validateService');
const CategoryModel = require('./../../models/Category');

const VALID_TYPE = 'category';

router.get('/', (req, res) => {
    crudService.findAll(CategoryModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(CategoryModel, res, req.params.id);
});

router.post('/', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.save(CategoryModel, res, req.body);
    }
});

router.put('/:id', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.updateById(CategoryModel, res, req);
    }
});

router.delete('/:id', (req, res) => {
    crudService.deleteById(CategoryModel, res, req.params.id);
});

module.exports = router;
