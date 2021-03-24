import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import * as Tone from 'tone';

import './app.css';
import Step from './step';

const ENDPOINT = 'http://localhost:4242';
let socket;

const GenerateGrid = (steps) => {
  
  const grid = [];
  for (let i = 0; i < steps; i++) {
    let currentStep = {
      pin: 4,
      isActive: false,
      stepNumber: i
    }
    grid.push(currentStep);
  }
  console.log('GenerateGrid Ran', grid)
  return grid;
}

export default function app() {
  const [grid, setGrid] = useState(GenerateGrid(8))
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentColumn, setCurrentColumn] = useState(null)
  const [bpm, setBpm] = useState(100)

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    // socket.emit('click', 'red');
  }, [])
  
  const pinFour = () => {
    socket.emit('click', 'red')
    // console.log('pin4 triggered')
  }

  const startTransport = (e) => {
    e.preventDefault()
    console.log(grid);
    Tone.start()
    Tone.Transport.start()
    Tone.Transport.bpm.value = bpm;
    seq.start(0)
    console.log('Transport Started')
  }

  const updateBpm = (newBpm) => {
    setBpm(newBpm)
  }

  const stopTransport = (e) => {
    e.preventDefault()
    Tone.Transport.stop();
    console.log('Transport Stopped')
  }

  const seq = new Tone.Sequence((time, note) => {
    if (note.isActive) {
      pinFour()
      // console.log(note.isActive)
    } else {
      // console.log(note.isActive)
    }
  }, grid, "8n");

  const handleStepClick = (clickedStep) => {
    // e.preventDefault()
    // console.log(clickedStep.stepNumber)
    let updatedGrid = grid.map(step => {
      let stepCopy = step;

      if (clickedStep.stepNumber === step.stepNumber) {
        stepCopy.isActive = !step.isActive
      }
      return stepCopy;
    })
    setGrid(updatedGrid)
    console.log(updatedGrid)
  }

  return (
    <>
      <span className="header">
        <h1>Welcome to Kinnect!</h1>
      </span>
      <div className="main-content-container">
        <div className="step-container">
          {grid.map((currentStep, index) => {
            return <Step handleStepClick={handleStepClick} currentStep={currentStep} key={index}/>
          })}
        </div> 
        <div className="button-container">
          {/* <button id="red-button" className="red" onClick={redButtonClick}>Red</button> */}
          <button id="green-button" className="green" onClick={startTransport}>Start</button>
          <button id="red-button" className="red" onClick={stopTransport}>Stop</button>
        </div >       
      </div>
    </>
  )
}
