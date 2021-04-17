import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import Column from './Column'

const ENDPOINT = 'localhost:4242';
let socket;

export default function session() {
  const [sequence, setSequence] = useState([])
  const [currentStep, setCurrentStep] = useState([0, 0, 0, 0])

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
      // console.log(step);
      setCurrentStep(step);
    })
  }, [])

  // const startTransport = (e) => {
  //   e.preventDefault();
  //   socket.on('step', step => {
  //     // console.log(step);
  //     setCurrentStep(step);
  //   })
  // }

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
      {sequence.map((currentColumn, index) => {
        return <Column currentColumn={currentColumn} key={index}/>
      })}
      </div>
    </>
  )
}
