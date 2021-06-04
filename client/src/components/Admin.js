import React, { useState, useEffect } from 'react';
import stepSequencer from 'step-sequencer';
import { io } from 'socket.io-client';

import CreateSequenceForm from './CreateSequenceForm';
import Column from './Column';

const ENDPOINT = 'localhost:4242';
let socket;

export default function Admin() {
  const [tempo, setTempo] = useState(100);
  const [division, setDivision] = useState(4);
  const [numberOfRows, setNumberOfRows] = useState(1)
  const [numberOfSteps, setNumberOfSteps] = useState(4)
  const [newSequence, setNewSequence] = useState([[1, 2, 3, 4]])
  const [connectionStatus, setConnectionStatus] = useState('Establishing Connection...')
  const [currentSequence, setCurrentSequence] = useState([[0, 1]])
  const [currentStepNumber, setCurrentStepNumber] = useState(0)

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on('success', response => {
      setConnectionStatus(response);
    })
    socket.on('sequence', sequence => {
      console.log('sequence received by Admin: ', sequence)
      setCurrentSequence(sequence)
    })
    socket.on('step', step => {
      setcurrentStepNumber(step);
    })
  }, [])

  const constructSequenceArray = () => {
    let sequenceArray = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      for (let j = 0; j < numberOfSteps; j++) {
        row.push(j);
      }
      sequenceArray.push(row);
    }
    console.log('squenceArray: ', sequenceArray)
    setNewSequence(sequenceArray)
  }

  const buildSequenceClickHandler = (e) => {
    e.preventDefault()
    console.log('the click worked, newSequence is: ', newSequence)
    constructSequenceArray();
  }

  useEffect(() => {
    console.log('useEffect newSeq Ran')
    socket.emit('newSequence', newSequence)
  }, [newSequence])

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
      <form>
        {/* <input type="text" placeholder={`Tempo: ${tempo} bpm`} name="tempo" onChange={(e) => setTempo(e.target.value)} /><br/>
        <input type="text" placeholder={`Division ${division}`} name="division" onChange={(e) => setDivision(e.target.value)} /><br/> */}
        <input type="number" placeholder="Number of rows" name="sequence" onChange={e => setNumberOfRows(e.target.value)} /><br/>
        <input type="number" placeholder="Number of steps" name="sequence" onChange={e => setNumberOfSteps(e.target.value)} /><br/>
        <button onClick={buildSequenceClickHandler}>Build Sequencer</button>
      </form>
    </>
  )
}
