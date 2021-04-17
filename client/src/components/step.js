import React, { useState } from 'react'

export default function sessionStep({ lightUp }) {
  // let currentStep = step;
  // const [isActive, setIsActive] = useState(false)
  let style = 'step';
  if (lightUp) {
    style = 'currently-on';
  }

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
    <div className={style} >
    </div>
  )
}
