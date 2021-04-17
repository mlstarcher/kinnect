import React from 'react'

import Step from './Step'

export default function Column({ currentColumnValues, activeColumnNumber, currentColumnNumber }) {
  // console.log('currentColumnValues is: ', currentColumnValues)
  let lightUp = false;
  return (
    <div className="column-containter">
        {currentColumnValues.map((currentStepValue, index) => {
          if (currentColumnNumber === activeColumnNumber) {
            lightUp = true;
          }
          return <Step key={index} lightUp={lightUp}/>
        })}
      </div>
  )
}
