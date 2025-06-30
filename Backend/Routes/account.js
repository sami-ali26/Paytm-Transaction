const express = require('express')
const jwt = require('jsonwebtoken')
const { userZodSchema, userSiginSchema } = require('../zod')
const { User, Account } = require('../db')
// const { hashPassword, comparePassword } = require('../haspassword')
const { authomiddleware } = require('../middleware')
const JWT_SECRET = require('../config')
const { default: mongoose } = require('mongoose')
const router = express.Router()


router.get('/balance', authomiddleware, async (req, res) => {

    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })

})
router.post('/transfer', authomiddleware, async (req, res) => {

    const session = await mongoose.startSession()
    session.startTransaction()

    const { amount, to } = req.body
    try {
        const giverUser = await Account.findOne({ userId: req.userId }).session(session)
        if (!giverUser || giverUser.balance < amount) {
            await session.abortTransaction()
            session.endSession()
            return res.json({
                message: "Inusufficient Balance"
            })
        }
        await Account.findOneAndUpdate({ userId: req.userId }, { $inc: { balance: -amount } }, { session })
        await Account.findOneAndUpdate({ userId: to }, { $inc: { balance: amount } }, { session })

        await session.commitTransaction()
        session.endSession()
        return res.json({
            message: "Transfer done successfully"
        })
    } catch (error) {
        await session.abortTransaction()
        session.endSession()
        res.json({
            message: "Server issue try later"
        })
    }
})
module.exports = router