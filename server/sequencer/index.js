const StepSequencer = require('step-sequencer');
const stepSequencerSettings = require('./stepSequencerSettings');

var stepSequencer = new StepSequencer(stepSequencerSettings.tempo, stepSequencerSettings.division, stepSequencerSettings.sequence);

module.exports.stepSequencer = stepSequencer;
module.exports.stepSequencerSettings = stepSequencerSettings;

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