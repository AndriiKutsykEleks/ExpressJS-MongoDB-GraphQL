const router = require('express').Router();
const auth = require('./auth');
const categories = require('./categories');
const comments = require('./comments');
const orders = require('./orders');
const products = require('./products');
const users = require('./users');
const { APIS } = require('./../../shared/constants');

router.use(APIS.auth, auth);
router.use(APIS.categories, categories);
router.use(APIS.comments, comments);
router.use(APIS.orders, orders);
router.use(APIS.products, products);
router.use(APIS.users, users);

module.exports = router;
