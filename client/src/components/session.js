import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import Column from './Column'

const ENDPOINT = 'localhost:4242';
let socket;

export default function session() {
  const [sequence, setSequence] = useState([])
  const [currentStepNumber, setCurrentStepNumber] = useState(0)

  useEffect(() => {
    console.log('useEffect ran in Session.jsx')
    socket = io(ENDPOINT);
    socket.on('success', response => {
      console.log(response);
    })
    socket.on('sequence', sequence => {
      console.log('sequence received: ', sequence)
      setSequence(sequence)
    })
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
      <div className="sequencer-container">
      {sequence.map((currentColumnValues, index) => {
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
