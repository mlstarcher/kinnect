const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const http = require('http')

const sequence = require('./sequencer/sequence.js')



const app = express()
const port = 4242;
app.use(express.json())
app.use(morgan('dev'))
// app.use(cors())

const server = http.createServer(app);
module.exports = server;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))

server.listen(port, () => {
    console.log(`Server is up and at em, listening on ${port}`)
})

//Start websocket
const io = require('./socket');