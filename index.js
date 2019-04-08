const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 3000;

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
        throw err;
    }

    client.db('shop').collection('product').find().toArray((err, result) => {
        if (err) {
            throw err;
        }

        console.log(result);
    });
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
