const errorService = require('./errorService');

const findAll = (model, res, isDataSend = true) => {
    return model
        .find({})
        .then(data => isDataSend ? res.status(200).send(data) : data)
        .catch(err => errorService.sendError(res, err.message));
};

const findById = (model, res, id, isDataSend = true) => {
    return model
        .findById(id)
        .then(data => isDataSend ? res.status(200).send(data) : data)
        .catch(err => errorService.sendError(res, err.message));
};

const save = (model, res, body, isDataSend = true) => {
    return model(body)
        .save()
        .then(data => {
            const msg = `${ model.modelName } is saved`;
            return isDataSend ? res.status(200).send({ msg }) : data;
        })
        .catch(err => errorService.sendError(res, err.message));
};

const updateById = (model, res, req, isDataSend = true) => {
    return model
        .findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        .then(data => {
            const msg = `${ model.modelName } is updated`;
            return isDataSend ? res.status(200).send({ msg }) : data;
        })
        .catch(err => errorService.sendError(res, err.message));
};

const deleteById = (model, res, id, isDataSend = true) => {
    return model
        .findOneAndRemove({ _id: id })
        .then(data => {
            const msg = `${ model.modelName } is deleted`;
            return isDataSend ? res.status(200).send({ msg }) : data;
        })
        .catch(err => error(res, err.message));
};

module.exports = {
    findAll,
    findById,
    save,
    updateById,
    deleteById
};
