const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    userId: String,
    products: Array,
    date: Number,
    status: String
});

module.exports = mongoose.model('Order', orderSchema);
