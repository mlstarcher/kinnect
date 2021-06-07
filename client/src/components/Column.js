import React from 'react'

import Step from './Step'

export default function Column({
  activeColumnNumber,
  columnDataArray,
  columnNumber
}) {
  return (
    <div className="column-containter" style={{ display: "flex", flexDirection: "column"}}>
        {columnDataArray.map((currentStepValue, index) => {
          return <Step
          currentStepValue={currentStepValue}
          columnNumber={columnNumber}
          stepNumber={index}
          key={index}
          />
        })}
      </div>
  )
}
