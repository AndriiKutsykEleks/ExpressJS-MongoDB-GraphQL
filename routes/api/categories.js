const router = require('express').Router();

router.get('/', (req, res) => {
    const data = [{
        id: 1,
        parentId: 1,
        name: 'TV & Monitors'
    }];
    res.status(200).send(data);
});

module.exports = router;
