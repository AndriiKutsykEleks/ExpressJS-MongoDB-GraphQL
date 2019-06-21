const router = require('express').Router();
const { crudService } = require('./../../services');
const { validationMiddleware } = require('./../../middlewares');
const { CategoryModel } = require('./../../models');
const { SCHEMAS, SCHEMAS_TYPE } = require('./../../shared/constants');

router.get(
    '/',
    (req, res) => crudService.findAll(CategoryModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findById(CategoryModel, res, req.params.id)
);

router.post(
    '/',
    validationMiddleware(SCHEMAS.CATEGORY, SCHEMAS_TYPE.CREATE),
    (req, res) => crudService.save(CategoryModel, res, req.body)
);

router.put(
    '/:id',
    validationMiddleware(SCHEMAS.CATEGORY, SCHEMAS_TYPE.UPDATE),
    (req, res) => crudService.updateById(CategoryModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(CategoryModel, res, req.params.id)
);

module.exports = router;
