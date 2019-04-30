const router = require('express').Router();

router.get('/', (req, res) => {
    const data = [{
        id: 1,
        userId: 1,
        products: [1],
        date: 1555230700,
        status: 'pending'
    }];
    res.status(200).send(data);
});

module.exports = router;
