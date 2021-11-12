const express = require('express')
const dotevn = require('dotenv')
const cors = require('cors')
const app = express();
const apiRoutes = require('./routes/api')

dotevn.config()

//Middlewares
app.use(express.json({ limit: '50mb' }))
app.use(cors())

//Routes
app.use('/api/v1', apiRoutes)

//Server
const port = process.env.PORT || 5000
app.listen(port, () => {
     console.log(`app is listening to port: ${port}`)
})