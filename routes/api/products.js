const router = require('express').Router();

router.get('/', (req, res) => {
    const data = [{
        id: 1,
        name: 'TV',
        costs: 12000,
        quantity: 1,
        extra: 'additional',
        categoryId: 1
    }];
    res.status(200).send(data);
});

module.exports = router;
