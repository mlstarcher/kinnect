import React, { useState, useEffect } from 'react';

import Column from './Column';
import PlaybackControls from './PlaybackControls'

export default function Sequence({ socket, currentSequence }) {
  // const [currentSequence, setCurrentSequence] = useState()
  const [currentStepNumber, setCurrentStepNumber] = useState(0)

  useEffect(() => {
    socket.on('step', step => {
      setCurrentStepNumber(step);
      console.log('current step is: ', step)
    })
  }, [])

  return (
    <div className="sequencer-container">
      {(currentSequence || [[]]).map((currentColumnValues, index) => {
        return <Column
        currentColumnValues={currentColumnValues}
        currentStepNumber={currentStepNumber}
        currentColumnNumber={index}
        // handleStepClick={handleStepClick}
        key={index}/>
      })}
    </div>
  )
}
