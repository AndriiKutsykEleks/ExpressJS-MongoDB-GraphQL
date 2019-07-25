const sendError = (res, msg, code) => {
    if (code && code !== 500) {
        return res.status(code).send({ error: msg });
    } else {
        return res.status(500).send({ error: `Server not access. ${msg}` })
    }
};

const sendSuccess = (res, data) => {
    return res.status(200).send(data)
};

const sendService = {
    sendError,
    sendSuccess
};

module.exports = sendService;
