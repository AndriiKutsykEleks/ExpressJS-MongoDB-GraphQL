const router = require('express').Router();
const crudService = require('../../services/crudService');
const validationMiddleware = require('./../../middlewares/validation');
const CommentModel = require('./../../models/Comment');

const VALID_TYPE = 'comment';

router.get(
    '/',
    (req, res) => crudService.findAll(CommentModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findAll(CommentModel, res, req.params.id)
);

router.post(
    '/',
    (req, res, next) => validationMiddleware(req, res, next, VALID_TYPE),
    (req, res) => crudService.save(CommentModel, res, req.body)
);

router.put(
    '/:id',
    (req, res, next) => validationMiddleware(req, res, next, VALID_TYPE),
    (req, res) => crudService.updateById(CommentModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(CommentModel, res, req.params.id)
);

module.exports = router;
