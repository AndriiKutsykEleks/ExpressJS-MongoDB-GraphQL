const router = require('express').Router();
const { crudService } = require('./../../services');
const { dependencyMiddleware, validationMiddleware } = require('./../../middlewares');
const { CommentModel, ProductModel, UserModel } = require('./../../models');
const { SCHEMAS, SCHEMAS_TYPE } = require('./../../shared/constants');

router.get(
    '/',
    (req, res) => crudService.findAll(CommentModel, res)
);

router.get(
    '/:id',
    (req, res) => crudService.findById(CommentModel, res, req.params.id)
);

router.post(
    '/',
    validationMiddleware(SCHEMAS.COMMENT, SCHEMAS_TYPE.CREATE),
    dependencyMiddleware(ProductModel, 'productId'),
    dependencyMiddleware(UserModel, 'userId' ),
    (req, res) => crudService.save(CommentModel, res, req.body)
);

router.put(
    '/:id',
    validationMiddleware(SCHEMAS.COMMENT, SCHEMAS_TYPE.UPDATE),
    dependencyMiddleware(ProductModel, 'productId'),
    dependencyMiddleware(UserModel, 'userId' ),
    (req, res) => crudService.updateById(CommentModel, res, req)
);

router.delete(
    '/:id',
    (req, res) => crudService.deleteById(CommentModel, res, req.params.id)
);

module.exports = router;
