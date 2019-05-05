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

router.put('/', (req, res) => {
    crudService.updateById(UserModel, res, req.body);
});

router.delete('/', (req, res) => {
    crudService.deleteById(UserModel, res, req.body._id);
});

module.exports = router;
