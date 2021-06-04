import React from 'react'

export default function CreateSequenceForm() {
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
