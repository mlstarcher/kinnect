import React from 'react'

import Step from './Step'

export default function Column({
  activeColumnNumber,
  columnDataArray,
  columnNumber,
  socket
}) {
  return (
    <div className="column-containter" style={{
      display: "flex",
      flexDirection: "column",
      border: (activeColumnNumber === columnNumber) ? "1px solid red" : "0px"
      }}>
        {columnDataArray.map((currentStepValue, index) => {
          return <Step
          currentStepValue={currentStepValue}
          columnNumber={columnNumber}
          stepNumber={index}
          socket={socket}
          key={index}
          />
        })}
      </div>
  )
}
