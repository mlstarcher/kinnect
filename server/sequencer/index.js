const StepSequencer = require('step-sequencer');
const stepSequencerSettings = require('./stepSequencerSettings');

var stepSequencer = new StepSequencer(stepSequencerSettings.tempo, stepSequencerSettings.division, stepSequencerSettings.sequence);

module.exports.stepSequencer = stepSequencer;
module.exports.stepSequencerSettings = stepSequencerSettings;