import React from 'react'

export default function currentStep({ currentStep, key }) {
  const classes = (currentStep === key) ? 'current-step' : 'step'
  return (
    <div className={classes}>

    </div>
  )
}
