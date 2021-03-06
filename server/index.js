const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const http = require('http')
// const messageArray = require('./app')

const app = express()
const port = 4242;
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'production')))

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is up and at em, listening on ${port}`)
})

module.exports.server = server;
const service = require('./app.js')