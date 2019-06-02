const config = require('./../config');
const mongoose = require('mongoose');

const mongoConnectPromise = mongoose
    .connect(
        `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
        { useNewUrlParser: true }
    )
    .then(client => {
        console.log(client);
    })
    .catch(err => {
        throw err;
    });

module.exports = mongoConnectPromise;
