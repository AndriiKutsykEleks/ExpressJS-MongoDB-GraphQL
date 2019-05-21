const router = require('express').Router();
const crudService = require('../../services/crudService');
const validateService = require('./../../services/validateService');
const OrderModel = require('./../../models/Order');

const VALID_TYPE = 'order';

router.get('/', (req, res) => {
    crudService.findAll(OrderModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(OrderModel, res, req.params.id);
});

router.post('/', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.save(OrderModel, res, req.body);
    }
});

router.put('/:id', (req, res) => {
    const valid = validateService.validateData(res, req.body, VALID_TYPE);

    if (valid) {
        crudService.updateById(OrderModel, res, req);
    }
});

router.delete('/:id', (req, res) => {
    crudService.deleteById(OrderModel, res, req.params.id);
});

module.exports = router;
