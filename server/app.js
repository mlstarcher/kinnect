// const stepSequencer = require('./sequencer').stepSequencer;
// const stepSequencerSettings = require('./sequencer').stepSequencerSettings;
const StepSequencer = require('step-sequencer');
// const StepSequencer = require('./sequencer/stepSequencer');
//Start websocket
const io = require('./socket');

const staticSequenceArray = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let sequencer = new StepSequencer(100, 4, staticSequenceArray);

let currentSequence = [[]];
io.on('connection', socket => {
  console.log('New WS Connection Established')
  socket.emit('success', 'Connected')
  socket.emit('sequence', staticSequenceArray)
  // socket.emit('sequence', stepSequencerSettings.sequence)

  socket.on('newSequence', (newSequence) => {
    console.log('newSequence received by server: ', newSequence)
    currentSequence = newSequence
    socket.emit('sequence', newSequence.newSequenceArray)
    // sequencer.on('0', function (step) {
    //   console.log(step);
    //   socket.emit('step', 0)
    // })
    sequencer.play()
  })
  socket.on('play', (input) => {
    sequencer.play()
    console.log('play ran')
    })

  socket.on('stop', () => {
    sequencer.stop()
    console.log('stop ran server side')
  })
  socket.on('tempo', (newTempo) => {
    sequencer.setTempo(newTempo)
    console.log(`Updated tempo to ${newTempo}bpm`)
  })

  sequencer.on('0', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('1', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('2', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('3', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('4', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('5', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('6', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('7', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('8', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('9', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('10', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('11', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('12', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('13', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('14', (step) => {
    socket.emit('step', step)
  })
  sequencer.on('15', (step) => {
    socket.emit('step', step)
  })
})


  //Receive step selection, emit updated sequence
  // socket.on('activateStep', stepDetails => {
  //   stepSequencerSettings.handleStepClick(stepDetails)
  //   console.log(stepSequencerSettings.sequence)
  //   socket.emit('sequence', stepSequencerSettings.sequence)
  // })
  // //Sequencer
  // stepSequencer.on('0', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 0)
  // })
  // stepSequencer.on('1', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 1)
  // })
  // stepSequencer.on('2', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 2)
  // })
  // stepSequencer.on('3', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 3)
  // })
  // stepSequencer.on('4', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 4)
  // })
  // stepSequencer.on('5', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 5)
  // })
  // stepSequencer.on('6', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 6)
  // })
  // stepSequencer.on('7', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 7)
  // })
  // stepSequencer.on('8', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 8)
  // })
  // stepSequencer.on('9', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 9)
  // })
  // stepSequencer.on('10', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 10)
  // })
  // stepSequencer.on('11', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 11)
  // })
  // stepSequencer.on('12', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 12)
  // })
  // stepSequencer.on('13', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 13)
  // })
  // stepSequencer.on('14', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 14)
  // })
  // stepSequencer.on('15', function (step) {
  //   // console.log(step);
  //   socket.emit('step', 15)
  // })