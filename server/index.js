const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const http = require('http')

const app = express()
const port = 4242;
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))

// app.get('/', (req, res) => {
//     res.redirect('/user')
// })

// app.get('/user', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'app.html'))
// // })

// app.get('/admin', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'admin.html'))
// })

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is up and at em, listening on ${port}`)
})

module.exports.server = server;
const service = require('./app.js')