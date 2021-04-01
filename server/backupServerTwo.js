const express = require('express')
const morgan = require('morgan')
const path = require('path')
// const cors = require('cors')

const http = require('http');
const socketio = require('socket.io')
// const io = require('./socket')

const stepSequencer = require('./sequencer')

const app = express()
app.use(express.json())
app.use(morgan('dev'))
// app.use(cors())

const port = 4242;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))

app.listen(port, () => {
    console.log(`Server is up and at em, listening on ${port}`)
})

//Socket io connection
const server = http.createServer(app);
module.exports = server;

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: "GET,PUT,POST"
  }
});

io.on('connection', socket => {
  console.log('New WS Connection Established')
  socket.emit('success', 'Welome to Kinnect, connection successful!')
})


// const activateStep = (selectedStepNumber) => {
//   console.log('selectedStepNumber is: ', selectedStepNumber)
//   let updatedGrid = sequence.map(currentStep => {
//     if (currentStep.stepNumber === selectedStepNumber) {
//       currentStep.isActive = !currentStep.isActive;
//     return currentStep;
//     } else {
//       return currentStep;
//     }
//   })
//   sequence = updatedGrid;
//   console.log(sequence);
// }