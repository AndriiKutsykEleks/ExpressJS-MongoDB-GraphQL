const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');
const mongoConnect = require('./shared/mongo');
const { sendError } = require('./services/errorService');

const app = express();

mongoConnect.then(() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(routes);
    app.use((err, req, res, next) => sendError(res, err.message, err.code));
    app.listen(config.port, () => console.log(`Web Shop listening on port ${config.port}!`));
});
