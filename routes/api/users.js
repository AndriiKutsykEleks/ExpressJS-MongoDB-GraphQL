const router = require('express').Router();

router.get('/', (req, res) => {
    const data = [{
        firstName: 'Andriy',
        lastName: 'Kutsyk',
        username: 'andrii.kutsyk',
        email: 'andrii.kutsyk@eleks.com'
    }];
    res.status(200).send(data);
});

module.exports = router;
