const config = require('../config/config');
const MongoClient = require('mongodb').MongoClient;
const mongoConnectPromise = MongoClient
    .connect(config.db.host, { useNewUrlParser: true })
    .then(client => {
        client
            .db(config.db.name)
            .collection(config.db.collection)
            .find()
            .toArray((err, result) => {
                if (err) {
                    throw err;
                }

                console.log(result);
            });
    })
    .catch(err => {
        throw err;
    });

module.exports = mongoConnectPromise;
