const stepSequencerSettings = {
  division: 2,
  bpm: 60,
  sequence: [
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
  ],
  handleStepClick: ({ rowNumber, stepNumber }) => {
    if (stepSequencerSettings.sequence[stepNumber][rowNumber] === 0) {
      stepSequencerSettings.sequence[stepNumber][rowNumber]++
    } else {
      stepSequencerSettings.sequence[stepNumber][rowNumber]--
    }
  }
}

module.exports = stepSequencerSettings;