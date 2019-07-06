const { sendSuccess } = require('./../services/sendService');

const router = require('express').Router();

router.get('/', (req, res) => {
    sendSuccess(res, 'Welcome to our Web Shop');
});

module.exports = router;
