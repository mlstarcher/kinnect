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
    // console.log(step);
    socket.emit('step', 0)
  })
  stepSequencer.on('1', function (step) {
    // console.log(step);
    socket.emit('step', 1)
  })
  stepSequencer.on('2', function (step) {
    // console.log(step);
    socket.emit('step', 2)
  })
  stepSequencer.on('3', function (step) {
    // console.log(step);
    socket.emit('step', 3)
  })
  stepSequencer.on('4', function (step) {
    // console.log(step);
    socket.emit('step', 4)
  })
  stepSequencer.on('5', function (step) {
    // console.log(step);
    socket.emit('step', 5)
  })
  stepSequencer.on('6', function (step) {
    // console.log(step);
    socket.emit('step', 6)
  })
  stepSequencer.on('7', function (step) {
    // console.log(step);
    socket.emit('step', 7)
  })
  stepSequencer.on('8', function (step) {
    // console.log(step);
    socket.emit('step', 8)
  })
  stepSequencer.on('9', function (step) {
    // console.log(step);
    socket.emit('step', 9)
  })
  stepSequencer.on('1', function (step) {
    // console.log(step);
    socket.emit('step', 10)
  })
  stepSequencer.on('11', function (step) {
    // console.log(step);
    socket.emit('step', 11)
  })
  stepSequencer.on('12', function (step) {
    // console.log(step);
    socket.emit('step', 12)
  })
  stepSequencer.on('13', function (step) {
    // console.log(step);
    socket.emit('step', 13)
  })
  stepSequencer.on('14', function (step) {
    // console.log(step);
    socket.emit('step', 14)
  })
  stepSequencer.on('15', function (step) {
    // console.log(step);
    socket.emit('step', 15)
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