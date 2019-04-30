const router = require('express').Router();
const api = require('./api');
const routes = require('./routes');

router.use('/api', api);
router.use('/', routes);

module.exports = router;
