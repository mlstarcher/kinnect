// const stepSequencer = require('./sequencer').stepSequencer;
// const stepSequencerSettings = require('./sequencer').stepSequencerSettings;
const StepSequencer = require('step-sequencer');
// const StepSequencer = require('./sequencer/stepSequencer');
//Start websocket
const io = require('./socket');

const staticSequenceArray = [
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
]

let sequencer = new StepSequencer(100, 4, staticSequenceArray);

let currentSequence = [[]];
let broadcaster;

io.on('connection', socket => {
  console.log('New WS Connection Established')
  socket.emit('success', 'Connected')
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

  //Step Sequencer
  socket.emit('sequence', staticSequenceArray)

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

  sequencer.on('0', (step) => {
    socket.emit('stepNumber', 0)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('1', (step) => {
    socket.emit('stepNumber', 1)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('2', (step) => {
    socket.emit('stepNumber', 2)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('3', (step) => {
    socket.emit('stepNumber', 3)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('4', (step) => {
    socket.emit('stepNumber', 4)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('5', (step) => {
    socket.emit('stepNumber', 5)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('6', (step) => {
    socket.emit('stepNumber', 6)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('7', (step) => {
    socket.emit('stepNumber', 7)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('8', (step) => {
    socket.emit('stepNumber', 8)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('9', (step) => {
    socket.emit('stepNumber', 9)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('10', (step) => {
    socket.emit('stepNumber', 10)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('11', (step) => {
    socket.emit('stepNumber', 11)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('12', (step) => {
    socket.emit('stepNumber', 12)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('13', (step) => {
    socket.emit('stepNumber', 13)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('14', (step) => {
    socket.emit('stepNumber', 14)
    socket.emit('sequence', staticSequenceArray)
  })
  sequencer.on('15', (step) => {
    socket.emit('stepNumber', 15)
    socket.emit('sequence', staticSequenceArray)
  })
})