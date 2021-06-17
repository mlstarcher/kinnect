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

let messagesArray = [];

io.on('connection', socket => {
  console.log('New WS Connection Established by ID: ', socket.id)
  socket.emit('success', 'Connected')

 //Step Sequencer
 socket.emit('sequence',  sequenceDetails)
 socket.emit('messages', messagesArray)

 socket.on('play', () => {
   sequencer.play()
   })

 socket.on('stop', () => {
   sequencer.stop()
 })

 socket.on('tempo', (newTempo) => {
  sequenceDetails.tempo = newTempo;
   sequencer.setTempo(newTempo)
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
   //Messaging
   socket.on('message', (message) => {
      messagesArray.unshift(message)
      socket.emit('messages', messagesArray)
   })


  //WebRTC
  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    console.log('broadcaster', broadcaster)
    socket.broadcast.emit("broadcaster");
  });
  socket.on("watcher", () => {
    console.log('watcher, ', socket.id, broadcaster)
    socket.to(broadcaster).emit("watcher", socket.id);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
  socket.on("offer", (id, message) => {
    console.log('offer received', id, message)
    socket.to(id).emit("offer", socket.id, message);
  });
  socket.on("answer", (id, message) => {
    socket.to(id).emit("answer", socket.id, message);
  });
  socket.on("candidate", (id, message) => {
    socket.to(id).emit("candidate", socket.id, message);
  });
})

module.exports = {
  messagesArray
}