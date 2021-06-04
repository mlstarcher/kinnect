import React, { useState, useEffect } from 'react';
import stepSequencer from 'step-sequencer';
import { io } from 'socket.io-client';

import CreateSequenceForm from './CreateSequenceForm';
import PlaybackControls from './PlaybackControls';
import Column from './Column';
import { sequence } from '../../../server/sequencer/stepSequencerSettings';

const ENDPOINT = 'localhost:4242';
let socket;

export default function Admin() {
  const [connectionStatus, setConnectionStatus] = useState('Connection Pending...')
  const [currentSequence, setCurrentSequence] = useState()
  const [currentStepNumber, setCurrentStepNumber] = useState(0)
  const [sequenceWasRendered, setSequenceWasRendered] = useState(false);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on('success', response => {
      setConnectionStatus(response);
    })
    socket.on('sequence', sequence => {
      console.log('sequence received by Admin: ', sequence)
      setCurrentSequence(sequence)
      console.log('does this fucker run the first time?')
      setSequenceWasRendered(true);
    })
    socket.on('step', step => {
      setcurrentStepNumber(step);
    })
  }, [])

  // useEffect(() => {
  //   if (currentSequence) {
  //     setSequenceWasRendered(true)
  //   } else {
  //     setSequenceWasRendered(false)
  //   }
  //   console.log(sequenceWasRendered)
  // }, [sequenceWasRendered])


  return (
    <>
    <h2>Status: {connectionStatus}</h2>
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
      <CreateSequenceForm
         socket={socket}
         sequenceWasRendered={sequenceWasRendered}
         setSequenceWasRendered={setSequenceWasRendered}/>
      <PlaybackControls sequenceWasRendered={sequenceWasRendered} />
    </>
  )
}
