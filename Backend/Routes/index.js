const express = require('express')
const rootRouter = express.Router()
const userRoute = require('./user')
const accountRoute = require('./account')



rootRouter.use('/user', userRoute)
rootRouter.use('/account', accountRoute)


module.exports = rootRouter