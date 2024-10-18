const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel