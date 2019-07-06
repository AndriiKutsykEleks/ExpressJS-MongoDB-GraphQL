const { sendError, sendSuccess } = require('./sendService');

const findAll = (model, res, isDataSend = true) => {
    return model
        .find({})
        .then(data => isDataSend ? sendSuccess(res, data) : data)
        .catch(err => crudError(res, err, isDataSend));
};

const findById = (model, res, id, isDataSend = true) => {
    return model
        .findById(id)
        .then(data => isDataSend ? sendSuccess(res, data) : data)
        .catch(err => crudError(res, err, isDataSend));
};

const findByKey = (model, res, params, isDataSend = true) => {
    return model
        .findOne(params)
        .then(data => isDataSend ? sendSuccess(res, data) : data)
        .catch(err => crudError(res, err, isDataSend));
};

const save = (model, res, body, isDataSend = true) => {
    return model(body)
        .save()
        .then(data => {
            const msg = `${ model.modelName } is saved`;
            return isDataSend ? sendSuccess(res, { msg }) : data;
        })
        .catch(err => crudError(res, err, isDataSend));
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
            return isDataSend ? sendSuccess(res, { msg }) : data;
        })
        .catch(err => crudError(res, err, isDataSend));
};

const deleteById = (model, res, id, isDataSend = true) => {
    return model
        .findOneAndRemove({ _id: id })
        .then(data => {
            const msg = `${ model.modelName } is deleted`;
            return isDataSend ? sendSuccess(res, { msg }) : data;
        })
        .catch(err => crudError(res, err, isDataSend));
};

const crudError = (res, error, isDataSend) => {
    return isDataSend ? sendError(res, error.message, error.code) : error;
};

const crudService = {
    findAll,
    findById,
    findByKey,
    save,
    updateById,
    deleteById
};

module.exports = crudService;
