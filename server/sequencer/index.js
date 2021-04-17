const StepSequencer = require('step-sequencer');
// const stepSequencerMethods = require('./stepSequencerMethods');

const sequence = [
  {
    step: 0,
    rows: [0, 0, 0, 0]
  },
  {
    step: 1,
    rows: [0, 0, 0, 0]
  },
  {
    step: 2,
    rows: [0, 0, 0, 0]
  },
  {
    step: 3,
    rows: [0, 0, 0, 0]
  },
  {
    step: 4,
    rows: [0, 0, 0, 0]
  },
  {
    step: 5,
    rows: [0, 0, 0, 0]
  },
  {
    step: 6,
    rows: [0, 0, 0, 0]
  },
  {
    step: 7,
    rows: [0, 0, 0, 0]
  },
  {
    step: 8,
    rows: [0, 0, 0, 0]
  },
];

const sequence2 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]

const stepSequencerMethods = {
  division: 8,
  bpm: 60,
  sequence: sequence2,
}

var tempo = 60;
var division = 8;

var stepSequencer = new StepSequencer(tempo, division, stepSequencerMethods.sequence);

module.exports.stepSequencer = stepSequencer;
module.exports.stepSequencerMethods = stepSequencerMethods;

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