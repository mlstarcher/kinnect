import React, { useState, useEffect } from 'react';
import stepSequencer from 'step-sequencer';
import { io } from 'socket.io-client';

import CreateSequenceForm from './CreateSequenceForm';
import Column from './Column';

const ENDPOINT = 'localhost:4242';
let socket;

export default function Admin() {
  const [connectionStatus, setConnectionStatus] = useState('Establishing Connection...')
  const [currentSequence, setCurrentSequence] = useState([[]])
  const [currentStepNumber, setCurrentStepNumber] = useState(0)

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on('success', response => {
      setConnectionStatus(response);
    })
    // socket.on('sequence', sequence => {
    //   console.log('sequence received by Admin: ', sequence)
    //   setCurrentSequence(sequence)
    // })
    socket.on('step', step => {
      setcurrentStepNumber(step);
    })
  }, [])


  return (
    <>
    <h2>{connectionStatus}</h2>
    <div className="sequencer-container">
      {currentSequence.map((currentColumnValues, index) => {
        return <Column
        currentColumnValues={currentColumnValues}
        currentStepNumber={currentStepNumber}
        currentColumnNumber={index}
        // handleStepClick={handleStepClick}
        key={index}/>
      })}
      </div>
      <CreateSequenceForm socket={socket}/>
    </>
  )
}
