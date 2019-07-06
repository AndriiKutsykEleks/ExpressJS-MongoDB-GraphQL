const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    firstName: String,
    lastName: String,
    dob: Number,
    isAdmin: Boolean,
    password: String,
    email: String
});

userSchema.pre(
    'save',
    function (next) {
        const user = this;

        if (!user.isModified('password')) {
            return next();
        }

        bcrypt
            .hash(user.password, 10)
            .then(hashedPassword => {
                user.password = hashedPassword;
                next();
            });
    },
    function (err) {
        next(err);
    }
);

userSchema.methods.comparePassword = function (candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return next(err);
        }

        next(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);
