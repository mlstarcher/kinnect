import React, { useState } from 'react'

export default function sessionStep({ currentStep, step, handleStepClick }) {
  // const [isActive, setIsActive] = useState(false)


  const myNumber = step.stepNumber;
  // console.log('step.stepNumber is ', myNumber)
  let classes = '';
  let isActive = '';

  if (currentStep.stepNumber === step.stepNumber) {
    classes = 'current-step'
  } else {
    classes = 'step';
  }

  if (step.isActive) {
    isActive = ' active-step'
  } else {
    isActive = ''
  }

  return (
    <div className={classes + isActive} onClick={() => handleStepClick(myNumber)}>

    </div>
  )
}
