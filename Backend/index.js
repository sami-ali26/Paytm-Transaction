const express = require('express')

const cors = require('cors')
const app = express()
const rootRouter = require('./Routes/index')

const port = 3004

app.use(cors())
app.use(express.json())
app.use('/api/v1', rootRouter)


app.listen(port, () => {
    console.log(`Server is running`);

})