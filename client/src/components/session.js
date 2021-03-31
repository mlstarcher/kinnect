import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

// import Step from './step';
import SessionStep from './sessionStep';

const ENDPOINT = 'localhost:4242';
let socket;

export default function session() {
  const [sequence, setSequence] = useState([])
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.on('success', response => {
      console.log(response);
    })
    socket.on('sequence', sequence => {
      console.log(sequence)
      setSequence(sequence)
    })
    socket.on('step', step => {
      // console.log(step);
      setCurrentStep(step);
    })
  }, [])

  const startTransport = (e) => {
    e.preventDefault();
    socket.on('step', step => {
      // console.log(step);
      setCurrentStep(step);
    })
  }

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
      <div className="main-content-container">
        <div className="step-container">
          {sequence.map(step => {
            return <SessionStep currentStep={currentStep} step={step} handleStepClick={handleStepClick} key={step.stepNumber}/>
          })}
        </div>
        <div className="button-container">
          {/* <button id="red-button" className="red" onClick={redButtonClick}>Red</button> */}
          {/* <button id="green-button" className="green" onClick={startTransport}>Start Listening</button> */}
          {/* <button id="red-button" className="red" onClick={stopTransport}>Stop</button> */}
        </div >
      </div>
    </>
  )
}
