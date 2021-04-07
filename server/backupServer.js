const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const http = require('http')
const socketio = require('socket.io')
const StepSequencer = require('step-sequencer')

// const Gpio = require('onoff').Gpio
// const pinFour = new Gpio(4, 'out')
// const greenLED = new Gpio(5, 'out')
// const blueLED = new Gpio(6, 'out')

const app = express()
app.use(express.json())
app.use(morgan('dev'))
// app.use(cors())

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: "GET,PUT,POST"
  }
});

const port = 4242;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))

server.listen(port, () => {
    console.log(`Server is up and at em, listening on ${port}`)
})

// Instantiate a new StepSequencer object
var tempo = 60;
var division = 8;
var sequence = [
  {stepNumber: 0, isActive: false},
  {stepNumber: 1, isActive: false},
  {stepNumber: 2, isActive: false},
  {stepNumber: 3, isActive: false},
  {stepNumber: 4, isActive: false},
  {stepNumber: 5, isActive: false},
  {stepNumber: 6, isActive: false},
  {stepNumber: 7, isActive: false},
];
var stepSequencer = new StepSequencer(tempo, division, sequence);

const initialize = () => {
  sequence = [
    {stepNumber: 0, isActive: false},
    {stepNumber: 1, isActive: false},
    {stepNumber: 2, isActive: false},
    {stepNumber: 3, isActive: false},
    {stepNumber: 4, isActive: false},
    {stepNumber: 5, isActive: false},
    {stepNumber: 6, isActive: false},
    {stepNumber: 7, isActive: false},
  ];
}

initialize();

// Begin playing the sequence
stepSequencer.play();

io.on('connection', socket => {
    console.log('New WS Connection Established')
    socket.emit('success', 'Welome to Kinnect, connection successful!')
    socket.emit('sequence', sequence)
    socket.on('activateStep', stepNumber => {
      activateStep(stepNumber)
      socket.emit('sequence', sequence)
    })


    // The StepSequencer emits the number of
    // the step when that step is to be played
    stepSequencer.on('0', function (step) {
        // console.log(step);
        socket.emit('step', step)
    })
    .on('1', function (step) {
        // console.log(step);
        socket.emit('step', step)
    })
    .on('2', function (step) {
        // console.log(step);
        socket.emit('step', step)
    })
    .on('3', function (step) {
        // console.log(step);
        socket.emit('step', step)
    })
    .on('4', function (step) {
      // console.log(step);
      socket.emit('step', step)
    })
    .on('5', function (step) {
        // console.log(step);
        socket.emit('step', step)
    })
    .on('6', function (step) {
        // console.log(step);
        socket.emit('step', step)
    })
    .on('7', function (step) {
      // console.log(step);
      socket.emit('step', step)
  });
})
