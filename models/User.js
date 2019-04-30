const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    dob: Date,
    isAdmin: Boolean
});

module.exports = mongoose.model('User', userSchema);
