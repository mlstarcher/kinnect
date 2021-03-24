import React from 'react'

export default function step({ handleStepClick, currentStep }) {
  const classes = currentStep.isActive ? 'active-step' : 'step'
  return (
    <div className={classes} onClick={() => handleStepClick(currentStep)}>
      
    </div>
  )
}
