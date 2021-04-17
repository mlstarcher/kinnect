import React, { useState } from 'react'

export default function sessionStep({ currentColumn, row }) {
  let currentRow = row;
  // const [isActive, setIsActive] = useState(false)


  // const myNumber = step.stepNumber;
  // console.log('step.stepNumber is ', myNumber)
  // let classes = '';
  // let isActive = '';

  // if (currentStep.stepNumber === step.stepNumber) {
  //   classes = 'current-step'
  // } else {
  //   classes = 'step';
  // }
  // if (step.isActive) {
  //   isActive = ' active-step'
  // } else {
  //   isActive = ''
  // }

  // onClick={() => handleStepClick(myNumber)}
  return (
    <div className="step" >
      <p>Col: {currentColumn}</p>
      <p>Row: {currentRow}</p>
    </div>
  )
}
