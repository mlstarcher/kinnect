import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import Column from './Column'

const ENDPOINT = 'localhost:4242';
let socket;

export default function session() {
  const [sequence, setSequence] = useState([])
  const [currentStepNumber, setcurrentStepNumber] = useState(0)

  useEffect(() => {
    // socket = socketIOClient(ENDPOINT);
    // socket.on('success', response => {
    //   console.log(response);
    // })
    // socket.on('sequence', sequence => {
    //   console.log('sequence received: ', sequence)
    //   setSequence(sequence)
    // })
    // socket.on('step', step => {
    //   setcurrentStepNumber(step);
    // })
  }, [])

const handleStepClick = (stepNumber, rowNumber) => {
    console.log('I got clicked');
    console.log('currentStepNumber :', stepNumber, 'currentRowNumber ;', rowNumber)

    let selectedStepDetails = {
      stepNumber: stepNumber,
      rowNumber: rowNumber
    }

    socket.emit('activateStep', selectedStepDetails)

    // socket.on('sequence', sequence => {
    //   console.log(sequence)
    //   setSequence(sequence)
    // }
  }

  return (
    <>
      <span className="header">
        <h1>Welcome to Kinnect!</h1>
      </span>
      <div className="sequencer-container">
      {sequence.map((currentColumnValues, index) => {
        // console.log('suppy', currentColumnValues)
        return <Column
        currentColumnValues={currentColumnValues}
        currentStepNumber={currentStepNumber}
        currentColumnNumber={index}
        handleStepClick={handleStepClick}
        key={index}/>
      })}
      </div>
    </>
  )
}
