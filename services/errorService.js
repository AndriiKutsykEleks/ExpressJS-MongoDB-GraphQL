const sendError = (res, msg, code) => {
  if (code !== 500) {
    res.status(code).send({ error: msg });
  } else {
    res.status(500).send({ error: 'Server not access' })
  }
};

module.exports = { sendError };
