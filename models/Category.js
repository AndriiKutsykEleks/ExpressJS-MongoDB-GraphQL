const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    parentId: String,
    name: String
});

module.exports = mongoose.model('Category', categorySchema);
