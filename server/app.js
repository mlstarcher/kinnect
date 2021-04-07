const StepSequencer = require('step-sequencer');
const stepSequencermethods = require('./sequencer').stepSequencerMethods;
//Start websocket
const io = require('./socket');
//Start sequencer

let stepSequencerOne = new StepSequencer(stepSequencermethods.tempo, stepSequencermethods.division, stepSequencermethods.sequence);

let stepSequencerTwo = new StepSequencer(stepSequencermethods.tempo, stepSequencermethods.division, stepSequencermethods.sequence);

let stepSequencerThree = new StepSequencer(stepSequencermethods.tempo, stepSequencermethods.division, stepSequencermethods.sequence);

let stepSequencerFour = new StepSequencer(stepSequencermethods.tempo, stepSequencermethods.division, stepSequencermethods.sequence);

stepSequencerOne.play()
stepSequencerTwo.play()
stepSequencerThree.play()
stepSequencerFour.play()

stepSequencerOne.on('0', function (step) {
  console.log(step);
  // socket.emit('step', step)
})
stepSequencerTwo.on('0', function (step) {
  console.log(step);
  // socket.emit('step', step)
})
stepSequencerThree.on('0', function (step) {
  console.log(step);
  // socket.emit('step', step)
})
stepSequencerFour.on('0', function (step) {
  console.log(step);
  // socket.emit('step', step)
})

io.on('connection', socket => {
  console.log('New WS Connection Established')
  socket.emit('success', 'Welome to Kinnect, connection successful!')
  socket.emit('sequence', stepSequencerMethods.sequence)
  //

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