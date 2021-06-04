import React from 'react'

export default function CreateSequenceForm() {

  const constructSequenceArray = () => {
    let sequenceArray = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      for (let j = 0; j < numberOfSteps; j++) {
        row.push(j);
      }
      sequenceArray.push(row);
    }
    setNewSequence(sequenceArray)
  }

  return (
    <form>
      <input type="text" placeholder={`Tempo: ${tempo} bpm`} name="tempo" onChange={(e) => setTempo(e.target.value)} /><br/>
      <input type="text" placeholder={`Division ${division}`} name="division" onChange={(e) => setDivision(e.target.value)} /><br/>
      <input type="text" placeholder="Number of rows" name="sequence" onChange={e => setNumberOfRows(e.target.value)} /><br/>
      <input type="text" placeholder="Number of steps" name="sequence" onChange={e => setNumberOfSteps(e.target.value)} /><br/>
      <button onClick={buildSequenceClickHandler}>Build Sequencer</button>
  </form>
  )
}
