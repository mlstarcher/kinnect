// const stepSequencer = require('./sequencer').stepSequencer;
// const stepSequencerSettings = require('./sequencer').stepSequencerSettings;
const StepSequencer = require('step-sequencer');
//Start websocket
const io = require('./socket');

let currentSequence = [[]];

io.on('connection', socket => {
  console.log('New WS Connection Established')
  socket.emit('success', 'Connected')
  // socket.emit('sequence', currentSequence)
  // socket.emit('sequence', stepSequencerSettings.sequence)
  let sequencer;
  let createSteps = (numberOfSteps) => {
    for (let i = 0; i < numberOfSteps; i++) {
      return sequencer.on(i.toString(), (step) => {console.log(step)})
    }
  }
  // sequencer.on('0', (step) => {console.log(step)})
  // sequencer.on('1', (step) => {console.log(step)})
  // sequencer.on('2', (step) => {console.log(step)})
  // sequencer.on('3', (step) => {console.log(step)})
  socket.on('newSequence', (newSequence) => {
    console.log('newSequence received by server: ', newSequence)
    currentSequence = newSequence
    sequencer = new StepSequencer(newSequence.tempo, newSequence.division, newSequence.sequence);
    // console.log(sequencer);
    socket.emit('sequence', newSequence.newSequenceArray)
  })
  socket.on('play', (input) => {
    // sequencer.play()
    console.log('play ran')
    // socket.emit('start', start)
  })
  socket.on('stop', () => {
      console.log('stop ran server side')
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
})