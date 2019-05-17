const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    productId: String,
    userId: String,
    message: String,
    date: Number,
    stars: Number
});

module.exports = mongoose.model('Comment', commentSchema);
