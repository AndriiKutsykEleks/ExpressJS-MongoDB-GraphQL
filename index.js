const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const routes = require('./routes/routes');
const mongoConnect = require('./shared/mongo');
const app = express();

mongoConnect.then(() => {
    routes(app);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(config.port, () => console.log(`Web Shop listening on port ${config.port}!`))
});
