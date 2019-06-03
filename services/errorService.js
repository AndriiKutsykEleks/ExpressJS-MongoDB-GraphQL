const sendError = (res, msg, code) => {
    if (code && code !== 500) {
        res.status(code).send({ error: msg });
    } else {
        res.status(500).send({ error: `Server not access. ${msg}` })
    }
};

const errorService = { sendError };

module.exports = errorService;
