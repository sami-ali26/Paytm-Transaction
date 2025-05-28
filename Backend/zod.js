const zod = require('zod')


const userZodSchema = zod.object({
    firstName: zod.string().min(3),
    lastName: zod.string().min(2),
    username: zod.string().email(),
    password: zod.string().min(4)
})
const userSiginSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(4)
})
module.exports = {
    userZodSchema,
    userSiginSchema
}