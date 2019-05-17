const router = require('express').Router();
const crudService = require('../../services/crudService');
const UserModel = require('./../../models/User');

router.get('/', (req, res) => {
    crudService.findAll(UserModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(UserModel, res, req.params.id);
});

router.post('/', (req, res) => {
    crudService.save(UserModel, res, req.body);
});

router.put('/:id', (req, res) => {
    crudService.updateById(UserModel, res, req);
});

router.delete('/:id', (req, res) => {
    crudService.deleteById(UserModel, res, req.params.id);
});

module.exports = router;
