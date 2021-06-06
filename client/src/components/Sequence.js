import React, { useState, useEffect } from 'react';

import Column from './Column';
import PlaybackControls from './PlaybackControls'

export default function Sequence({ socket, sequenceWasRendered, setSequenceWasRendered }) {
  const [currentSequence, setCurrentSequence] = useState()
  const [currentStepNumber, setCurrentStepNumber] = useState(0)
  // const [sequenceWasRendered, setSequenceWasRendered] = useState(false);

  useEffect(() => {
    socket.on('sequence', sequence => {
      console.log('sequence received by Admin: ', sequence)
      setCurrentSequence(sequence)
      setSequenceWasRendered(true);
    })
    socket.on('step', step => {
      setCurrentStepNumber(step);
    })
  }, [])

  return (
    <>
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
      <PlaybackControls socket={socket}/>
      {/* {sequenceWasRendered ? <PlaybackControls socket={socket}/> : <></>} */}
    </>
  )
}
