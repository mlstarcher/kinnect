import React, { useState, useEffect } from 'react';

import Column from './Column';
import PlaybackControls from './PlaybackControls'

export default function Sequence({ socket, currentSequence }) {
  // const [currentSequence, setCurrentSequence] = useState()
  const [activeColumnNumber, setactiveColumnNumber] = useState(0)

  useEffect(() => {
    socket.on('step', step => {
      setactiveColumnNumber(step);
    })
  }, [])

  return (
    <div className="sequencer-container" style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
      {(currentSequence || [[]]).map((columnDataArray, index) => {
        return <Column
        activeColumnNumber={activeColumnNumber}
        columnDataArray={columnDataArray}
        columnNumber={index}
        // handleStepClick={handleStepClick}
        key={index}/>
      })}
    </div>
  )
}
