const router = require('express').Router();
const UserModel = require('./../../models/User');
const error = require('./../../shared/error');

router.get('/', (req, res) => {
    UserModel
        .find({})
        .then(data => res.status(200).send(data))
        .catch(err => error(res, err.message));
});

router.get('/:id', (req, res) => {
    UserModel
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => error(res, err.message));
});

router.post('/', (req, res) => {
    UserModel(req.body)
        .save()
        .then(() => res.status(200).send({msg: 'User is saved'}))
        .catch(err => error(res, err.message));
});

router.put('/', (req, res) => {
    UserModel
        .findOneAndUpdate(
            { _id: req.body._id },
            { $set: req.body },
            { new: true }
        )
        .then(() => res.status(200).send({msg: 'User is updated'}))
        .catch(err => error(res, err.message));
});

router.delete('/', (req, res) => {
    UserModel
        .findOneAndRemove({ _id: req.body._id })
        .then(() => res.status(200).send({msg: 'User is deleted'}))
        .catch(err => error(res, err.message));
});

module.exports = router;
