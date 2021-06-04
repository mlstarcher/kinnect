import React, { useState, useEffect } from 'react';

export default function CreateSequenceForm({ socket }) {
  const [tempo, setTempo] = useState(100);
  const [division, setDivision] = useState(4);
  const [numberOfRows, setNumberOfRows] = useState(0)
  const [numberOfSteps, setNumberOfSteps] = useState(0)
  const [newSequenceArray, setNewSequenceArray] = useState([[]])

  const constructSequenceArray = (rows, steps) => {
    let sequenceArray = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < steps; j++) {
        row.push(j);
      }
      sequenceArray.push(row);
    }
    setNewSequenceArray(sequenceArray)
    setNumberOfRows(rows);
    setNumberOfSteps(steps);
  }

  const buildSequenceClickHandler = (e) => {
    e.preventDefault();
    let sequenceObject = {
      tempo,
      division,
      newSequenceArray,
    }
    socket.emit('newSequence', sequenceObject)
    console.log('sequenceObject is: ', sequenceObject, socket)
  }

  return (
    <form>
      <label htmlFor="tempo">Tempo: </label>
      <input type="number" placeholder={`${tempo} bpm`} id="tempo" onChange={(e) => setTempo(e.target.value)} />
      <br/>
      <label htmlFor="division">Beats Per Measure: </label>
      <input type="number" placeholder={`Beats Per Measure ${division}`} id="division" onChange={(e) => setDivision(e.target.value)} />
      <br/>
      <label htmlFor="rows">Number of Rows: </label>
      <input type="number" placeholder="4" id="rows" onChange={e => constructSequenceArray(e.target.value, numberOfSteps)} />
      <br/>
      <label htmlFor="steps">Number of Steps: </label>
      <input type="number" placeholder="8" id="steps" onChange={e => constructSequenceArray(numberOfRows, e.target.value)} />
      <br/>
      <button onClick={buildSequenceClickHandler}>Build Sequencer</button>
  </form>
  )
}
