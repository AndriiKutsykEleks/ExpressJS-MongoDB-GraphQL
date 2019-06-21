const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    name: String,
    costs: Number,
    quantity: Number,
    extra: String,
    categoryId: String
});

module.exports = mongoose.model('Product', productSchema);
