const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URL)

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
})
const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', accountSchema)

module.exports = {
    User,
    Account
}