const express = require('express')
const jwt = require('jsonwebtoken')
const { userZodSchema, userSiginSchema } = require('../zod')
const { User, Account } = require('../db')
const { hashPassword, comparePassword } = require('../haspassword')
const JWT_SECRET = require('../config')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("✅ Backend is Live!");
});

router.post('/signup', async (req, res) => {
    const userPayload = req.body
    const parsedPayload = userZodSchema.safeParse(userPayload)
    if (!parsedPayload.success) {
        return res.json({
            message: "Eneter valid data / Inputs are wrong"
        })
    }
    const exitingUsermail = await User.findOne({ username: req.body.username })
    if (exitingUsermail) {
        return res.json({
            message: "Username is already taken"
        })
    }
    const hashed = await hashPassword(req.body.password)

    const user = await User.create({
        username: req.body.username,
        password: hashed,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const userAccount = await Account.create({
        userId: user._id,
        balance: Math.floor(1 + Math.random() * 10000)
    })
    const balance = userAccount.balance
    const token = jwt.sign({ userId: user._id }, JWT_SECRET)

    res.json({
        message: 'User is created',
        token,
        balance
    })
})
router.post('/signin', async (req, res) => {
    const userPayload = req.body
    const parsedData = userSiginSchema.safeParse(userPayload)
    if (!parsedData.success) {
        return res.json({
            message: 'Enter valid inputs'
        })
    }
    const user = await User.findOne({ username: req.body.username }).select("_id password");
    if (!user) {
        return res.json({
            message: 'Username is incorrect'
        })
    }
    const hasedpassword = await comparePassword(req.body.password, user.password)
    if (!hasedpassword) {
        return res.json({
            message: "password is incorrect"
        })
    } else {

        const token = jwt.sign({ userId: user._id }, JWT_SECRET);

        res.json({
            message: 'Login successfully',
            token
        });
    }
})
router.get('/bulk', async (req, res) => {
    const filter = req.query.filter || ""
    try {
        const users = await User.find({
            $or: [{
                firstName: new RegExp(filter, 'i')
            }, {
                lastName: new RegExp(filter, 'i')
            }]
        })
        res.json({
            user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
    } catch (error) {
        return res.json({
            message: `Oops ${error.message}`
        })
    }

})



module.exports = router