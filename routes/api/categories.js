const router = require('express').Router();
const crudService = require('../../services/crudService');
const validationMiddleware = require('./../../middlewares/validation');
const CategoryModel = require('./../../models/Category');

const VALID_TYPE = 'category';

router.get(
    '/',
    (req, res) => crudService.findAll(CategoryModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findAll(CategoryModel, res, req.params.id)
);

router.post(
    '/',
    validationMiddleware(VALID_TYPE),
    (req, res) => crudService.save(CategoryModel, res, req.body)
);

router.put(
    '/:id',
    validationMiddleware(VALID_TYPE),
    (req, res) => crudService.updateById(CategoryModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(CategoryModel, res, req.params.id)
);

module.exports = router;
