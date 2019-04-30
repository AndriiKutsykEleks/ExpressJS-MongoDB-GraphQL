const config = require('../config/config');
const mongoose = require('mongoose');
const db = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
const mongoConnectPromise = mongoose
    .connect(db, { useNewUrlParser: true })
    .then(client => {
        console.log(client);
    })
    .catch(err => {
        throw err;
    });

module.exports = mongoConnectPromise;
