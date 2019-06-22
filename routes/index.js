const router = require('express').Router();
const api = require('./api');
const routes = require('./routes');
const { access } = require('./../auth');

router.use((req, res, next) => access(req, res, next));
router.use('/api', api);
router.use('/', routes);

module.exports = router;
