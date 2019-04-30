const router = require('express').Router();
const categories = require('./categories');
const comments = require('./comments');
const orders = require('./orders');
const products = require('./products');
const users = require('./users');

router.use('/categories', categories);
router.use('/comments', comments);
router.use('/orders', orders);
router.use('/products', products);
router.use('/users', users);

module.exports = router;
