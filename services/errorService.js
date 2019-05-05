const sendError = (res, msg = 'Item not found') => {
    res.status(404).send({ error: msg });
};

module.exports = sendError;
