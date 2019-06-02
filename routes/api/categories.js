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
    (req, res, next) => validationMiddleware(req, res, next, VALID_TYPE),
    (req, res) => crudService.save(CategoryModel, res, req.body)
);

router.put(
    '/:id',
    (req, res, next) => validationMiddleware(req, res, next, VALID_TYPE),
    (req, res) => crudService.updateById(CategoryModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(CategoryModel, res, req.params.id)
);

module.exports = router;
