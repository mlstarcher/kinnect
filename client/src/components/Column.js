import React from 'react'

import Step from './Step'

export default function Column({ currentColumnValues, currentStepNumber, currentColumnNumber, handleStepClick }) {
  let lightUp = false;
  return (
    <div className="column-containter">
        {currentColumnValues.map((currentStepValue, index) => {
          if (currentColumnNumber === currentStepNumber) {
            lightUp = true;
          }
          return <Step
          currentStepValue={currentStepValue}
          currentStepNumber={currentColumnNumber}
          currentRowNumber={index}
          key={index}
          lightUp={lightUp}
          handleStepClick={handleStepClick}
          />
        })}
      </div>
  )
}
