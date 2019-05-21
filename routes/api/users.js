const router = require('express').Router();
const crudService = require('./../../services/crudService');
const validateService = require('./../../services/validateService');
const UserModel = require('./../../models/User');

const VALID_TYPE = 'user';

router.get('/', (req, res) => {
    crudService.findAll(UserModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(UserModel, res, req.params.id);
});

router.post('/', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.save(UserModel, res, req.body);
    }
});

router.put('/:id', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.updateById(UserModel, res, req);
    }
});

router.delete('/:id', (req, res) => {
    crudService.deleteById(UserModel, res, req.params.id);
});

module.exports = router;
