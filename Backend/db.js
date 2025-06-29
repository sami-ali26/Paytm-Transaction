require("dotenv").config();

const mongoose = require("mongoose");
require("dns").setDefaultResultOrder("ipv4first");

mongoose.connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 10000,
})
    .then(() => console.log(" Connected to MongoDB Atlas"))
    .catch((err) => console.error(" DB connection error:", err));

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