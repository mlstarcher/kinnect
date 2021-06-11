import React from 'react'

export default function SequenceInfo({ currentSequenceDetails }) {
  return (
    <div>
      <h4>{`Tempo: ${currentSequenceDetails.tempo}`}</h4>
      <h4>{`Divisions: ${currentSequenceDetails.tempo}`}</h4>
    </div>
  )
}
