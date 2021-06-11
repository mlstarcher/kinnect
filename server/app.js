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

let currentSequence = [[]];
let broadcaster;

io.on('connection', socket => {
  console.log('New WS Connection Established by ID: ', socket.id)
  socket.emit('success', 'Connected')

 //Step Sequencer
 console.log(sequenceDetails)
 socket.emit('sequence', sequenceDetails)

 socket.on('play', (input) => {
   sequencer.play()
   })

 socket.on('stop', () => {
   sequencer.stop()
 })

 socket.on('tempo', (newTempo) => {
   sequencer.setTempo(newTempo)
   console.log(`Updated tempo to ${newTempo}bpm`)
 })

 socket.on('stepClick', ({ columnNumber, stepNumber }) => {
   console.log('columnNumber: ', columnNumber, 'stepNumber: ',  stepNumber)
   staticSequenceArray[columnNumber][stepNumber] = !staticSequenceArray[columnNumber][stepNumber];
   socket.emit('sequence', staticSequenceArray)
   console.log(staticSequenceArray)
 })

 sequencer.on('step', (stepNumber) => {
   // console.log(stepNumber)
   socket.emit('stepNumber', stepNumber)
 })


  //WebRTC
  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    console.log('broadcaster id: ', broadcaster)
    socket.broadcast.emit("broadcaster");
  });
  socket.on("watcher", () => {
    socket.to(broadcaster).emit("watcher", socket.id);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
  socket.on("offer", (id, message) => {
    socket.to(id).emit("offer", socket.id, message);
  });
  socket.on("answer", (id, message) => {
    socket.to(id).emit("answer", socket.id, message);
  });
  socket.on("candidate", (id, message) => {
    socket.to(id).emit("candidate", socket.id, message);
  });
})