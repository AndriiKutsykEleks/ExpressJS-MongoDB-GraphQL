const router = require('express').Router();
const crudService = require('../../services/crudService');
const CommentModel = require('./../../models/Comment');

router.get('/', (req, res) => {
    crudService.findAll(CommentModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(CommentModel, res, req.params.id);
});

router.post('/', (req, res) => {
    crudService.save(CommentModel, res, req.body);
});

router.put('/', (req, res) => {
    crudService.updateById(CommentModel, res, req.body);
});

router.delete('/', (req, res) => {
    crudService.deleteById(CommentModel, res, req.body._id);
});

module.exports = router;
