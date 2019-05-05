const router = require('express').Router();
const crudService = require('../../services/crudService');
const OrderModel = require('./../../models/Order');

router.get('/', (req, res) => {
    crudService.findAll(OrderModel, res);
});

router.get('/:id', (req, res) => {
    crudService.findAll(OrderModel, res, req.params.id);
});

router.post('/', (req, res) => {
    crudService.save(OrderModel, res, req.body);
});

router.put('/', (req, res) => {
    crudService.updateById(OrderModel, res, req.body);
});

router.delete('/', (req, res) => {
    crudService.deleteById(OrderModel, res, req.body._id);
});

module.exports = router;
