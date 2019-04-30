const router = require('express').Router();

router.get('/', (req, res) => {
    const data = [{
        id: 1,
        productId: 1,
        userId: 1,
        message: 'Hi',
        date: 1555230700,
        stars: 5
    }];
    res.status(200).send(data);
});

module.exports = router;
