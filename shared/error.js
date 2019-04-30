const error = (res, err = 'Item not found') => {
    res.status(404).send({error: err});
};

module.exports = error;
