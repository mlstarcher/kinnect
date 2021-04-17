import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import Column from './Column'

const ENDPOINT = 'localhost:4242';
let socket;

export default function session() {
  const [sequence, setSequence] = useState([])
  const [activeColumnNumber, setActiveColumnNumber] = useState(0)

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.on('success', response => {
      console.log(response);
    })
    socket.on('sequence', sequence => {
      console.log('sequence received: ', sequence)
      setSequence(sequence)
    })
    socket.on('step', step => {
      setActiveColumnNumber(step);
    })
  }, [])

  const handleStepClick = (stepNumber) => {
    console.log(stepNumber);
    socket.emit('activateStep', stepNumber)
    socket.on('sequence', sequence => {
      console.log(sequence)
      setSequence(sequence)
    })
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
        activeColumnNumber={activeColumnNumber}
        currentColumnNumber={index}
        key={index}/>
      })}
      </div>
    </>
  )
}
