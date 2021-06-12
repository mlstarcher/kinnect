// const stepSequencer = require('./sequencer').stepSequencer;
// const stepSequencerSettings = require('./sequencer').stepSequencerSettings;
// const StepSequencer = require('step-sequencer');
const StepSequencer = require('./sequencer/stepSequencer');
//Start websocket
const io = require('./socket');

let sequenceDetails = {
  staticSequenceArray: [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  tempo: 100,
  divisions: 4
}

let sequencer = new StepSequencer(sequenceDetails.tempo, sequenceDetails.divisions, sequenceDetails.staticSequenceArray);

let broadcaster;

io.on('connection', socket => {
  console.log('New WS Connection Established by ID: ', socket.id)
  socket.emit('success', 'Connected')

 //Step Sequencer
 socket.emit('sequence',  sequenceDetails)

 socket.on('play', (input) => {
   sequencer.play()
   })

 socket.on('stop', () => {
   sequencer.stop()
 })

 socket.on('tempo', (newTempo) => {
  sequenceDetails.tempo = newTempo;
   sequencer.setTempo(Number(newTempo))
   socket.emit('sequence', sequenceDetails)
 })

 socket.on('stepClick', ({ columnNumber, stepNumber }) => {
  sequenceDetails.staticSequenceArray[columnNumber][stepNumber] = !sequenceDetails.staticSequenceArray[columnNumber][stepNumber];
   socket.emit('sequence', sequenceDetails)
 })

 sequencer.on('step', (stepNumber) => {
   // console.log(stepNumber)
   socket.emit('stepNumber', stepNumber)
 })


  //WebRTC
  let broadcaster
  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    socket.broadcast.emit("broadcaster");
  });
  socket.on("watcher", () => {
    socket.to(broadcaster).emit("watcher", socket.id);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
})