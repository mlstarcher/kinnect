const StepSequencer = require('step-sequencer');
const sequence = require('./sequence');

var tempo = 60;
var division = 8;

var stepSequencer = new StepSequencer(tempo, division, sequence);

module.exports = stepSequencer;