import React, { useState, useEffect } from 'react';

export default function CreateSequenceForm({ socket }) {
  const [tempo, setTempo] = useState(100);
  const [division, setDivision] = useState(4);
  const [numberOfRows, setNumberOfRows] = useState(1)
  const [numberOfSteps, setNumberOfSteps] = useState(4)
  const [newSequence, setNewSequence] = useState([[]])

  const constructSequenceArray = (rows, steps) => {
    let sequenceArray = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < steps; j++) {
        row.push(j);
      }
      sequenceArray.push(row);
    }
    setNewSequence(sequenceArray)
    setNumberOfRows(rows);
    setNumberOfSteps(steps);
  }

  const buildSequenceClickHandler = (e) => {
    e.preventDefault();
    socket.emit('newSequence', newSequence)
  }

  return (
    <form>
      <input type="number" placeholder={`Tempo: ${tempo} bpm`} name="tempo" onChange={(e) => setTempo(e.target.value)} /><br/>
      <input type="number" placeholder={`Division ${division}`} name="division" onChange={(e) => setDivision(e.target.value)} /><br/>
      <input type="number" placeholder="Number of rows" name="sequence" onChange={e => constructSequenceArray(e.target.value, numberOfSteps)} /><br/>
      <input type="number" placeholder="Number of steps" name="sequence" onChange={e => constructSequenceArray(numberOfRows, e.target.value)} /><br/>
      <button onClick={buildSequenceClickHandler}>Build Sequencer</button>
  </form>
  )
}
