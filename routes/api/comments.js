const router = require('express').Router();
const crudService = require('../../services/crudService');
const validateService = require('./../../services/validateService');
const CommentModel = require('./../../models/Comment');

const VALID_TYPE = 'comment';

router.get('/', (req, res) => {
    crudService.findAll(CommentModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(CommentModel, res, req.params.id);
});

router.post('/', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.save(CommentModel, res, req.body);
    }
});

router.put('/:id', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.updateById(CommentModel, res, req);
    }
});

router.delete('/:id', (req, res) => {
    crudService.deleteById(CommentModel, res, req.params.id);
});

module.exports = router;
