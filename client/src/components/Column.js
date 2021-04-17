import React from 'react'

import Step from './Step'

export default function Column({ currentColumn }) {
  // console.log('currentColumn is: ', currentColumn)
  return (
    <div className="column-containter">
        {currentColumn.rows.map((currentStep, index) => {
          return <Step row={index} currentColumn={currentColumn.step} key={index} />
        })}
      </div>
  )
}
