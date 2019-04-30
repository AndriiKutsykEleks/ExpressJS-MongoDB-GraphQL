const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    dob: Number,
    isAdmin: Boolean
});

module.exports = mongoose.model('User', userSchema);
