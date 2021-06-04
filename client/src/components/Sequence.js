import React, { useState, useEffect } from 'react';

import Column from './Column';
import PlaybackControls from './PlaybackControls'

export default function Sequence({ socket }) {
  const [currentSequence, setCurrentSequence] = useState()
  const [currentStepNumber, setCurrentStepNumber] = useState(0)
  const [sequenceWasRendered, setSequenceWasRendered] = useState(false);

  useEffect(() => {
    console.log('useEffect ran in Sequence', socket)
    // socket = io(ENDPOINT);
    // socket.on('success', response => {
    //   setConnectionStatus(response);
    // })
    socket.on('sequence', sequence => {
      console.log('sequence received by Admin: ', sequence)
      setCurrentSequence(sequence)
      setSequenceWasRendered(true);
    })
    socket.on('step', step => {
      setcurrentStepNumber(step);
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
