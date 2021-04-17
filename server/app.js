const StepSequencer = require('step-sequencer');
const stepSequencerMethods = require('./sequencer').stepSequencerMethods;
//Start websocket
const io = require('./socket');
//Start sequencer

let stepSequencer = new StepSequencer(stepSequencerMethods.tempo, stepSequencerMethods.division, stepSequencerMethods.sequence);

stepSequencer.play()

io.on('connection', socket => {
  console.log('New WS Connection Established')
  socket.emit('success', 'Welome to Kinnect, connection successful!')
  socket.emit('sequence', stepSequencerMethods.sequence)
  stepSequencer.on('0', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
  stepSequencer.on('1', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
  stepSequencer.on('2', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
  stepSequencer.on('3', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
  stepSequencer.on('4', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
  stepSequencer.on('5', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
  stepSequencer.on('6', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
  stepSequencer.on('7', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
  stepSequencer.on('8', function (step) {
    console.log(step);
    socket.emit('step', step)
  })
})

// The StepSequencer emits the number of
    // the step when that step is to be played
//     stepSequencer.on('0', function (step) {
//       // console.log(step);
//       socket.emit('step', step)
//   })
//   .on('1', function (step) {
//       // console.log(step);
//       socket.emit('step', step)
//   })
//   .on('2', function (step) {
//       // console.log(step);
//       socket.emit('step', step)
//   })
//   .on('3', function (step) {
//       // console.log(step);
//       socket.emit('step', step)
//   })
//   .on('4', function (step) {
//     // console.log(step);
//     socket.emit('step', step)
//   })
//   .on('5', function (step) {
//       // console.log(step);
//       socket.emit('step', step)
//   })
//   .on('6', function (step) {
//       // console.log(step);
//       socket.emit('step', step)
//   })
//   .on('7', function (step) {
//     // console.log(step);
//     socket.emit('step', step)
// });