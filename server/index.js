const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const http = require('http')
// const socketio = require('socket.io')



const app = express()
const port = 4242;
app.use(express.json())
app.use(morgan('dev'))
// app.use(cors())

const server = http.createServer(app);
module.exports = server;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))



server.listen(port, () => {
    console.log(`Server is up and at em, listening on ${port}`)
})

const io = require('./socket');



//STEP SEQUENCER
// Instantiate a new StepSequencer object
// var tempo = 60;
// var division = 8;
// var sequence = [
//   {stepNumber: 0, isActive: false},
//   {stepNumber: 1, isActive: false},
//   {stepNumber: 2, isActive: false},
//   {stepNumber: 3, isActive: false},
//   {stepNumber: 4, isActive: false},
//   {stepNumber: 5, isActive: false},
//   {stepNumber: 6, isActive: false},
//   {stepNumber: 7, isActive: false},
// ];
// var stepSequencer = new StepSequencer(tempo, division, sequence);

// const initialize = () => {
//   sequence = [
//     {stepNumber: 0, isActive: false},
//     {stepNumber: 1, isActive: false},
//     {stepNumber: 2, isActive: false},
//     {stepNumber: 3, isActive: false},
//     {stepNumber: 4, isActive: false},
//     {stepNumber: 5, isActive: false},
//     {stepNumber: 6, isActive: false},
//     {stepNumber: 7, isActive: false},
//   ];
// }

// initialize();

// // Begin playing the sequence
// stepSequencer.play();

// const activateStep = (selectedStepNumber) => {
//   console.log('selectedStepNumber is: ', selectedStepNumber)
//   let updatedGrid = sequence.map(currentStep => {
//     if (currentStep.stepNumber === selectedStepNumber) {
//       currentStep.isActive = !currentStep.isActive;
//     return currentStep;
//     } else {
//       return currentStep;
//     }
//   })
//   sequence = updatedGrid;
//   console.log(sequence);
// }
