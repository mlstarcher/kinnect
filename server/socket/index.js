const server = require('../index.js').server;
const socketio = require('socket.io')

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: "GET,PUT,POST"
  }
});

module.exports = io;

// io.on('connection', socket => {
//     console.log('New WS Connection Established')
//     socket.emit('success', 'Welome to Kinnect, connection successful!')
//     socket.emit('sequence', sequence)
//     socket.on('activateStep', stepNumber => {
//       activateStep(stepNumber)
//       socket.emit('sequence', sequence)
//     })
//     // The StepSequencer emits the number of
//     // the step when that step is to be played
//     stepSequencer.on('0', function (step) {
//         // console.log(step);
//         socket.emit('step', step)
//     })
//     .on('1', function (step) {
//         // console.log(step);
//         socket.emit('step', step)
//     })
//     .on('2', function (step) {
//         // console.log(step);
//         socket.emit('step', step)
//     })
//     .on('3', function (step) {
//         // console.log(step);
//         socket.emit('step', step)
//     })
//     .on('4', function (step) {
//       // console.log(step);
//       socket.emit('step', step)
//     })
//     .on('5', function (step) {
//         // console.log(step);
//         socket.emit('step', step)
//     })
//     .on('6', function (step) {
//         // console.log(step);
//         socket.emit('step', step)
//     })
//     .on('7', function (step) {
//       // console.log(step);
//       socket.emit('step', step)
//   });
// })
