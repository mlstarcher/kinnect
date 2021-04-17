import React, { useState } from 'react'

export default function sessionStep({ lightUp, handleStepClick, currentStepValue, currentStepNumber, currentRowNumber }) {

  let stepNumber = currentStepNumber;
  let rowNumber = currentRowNumber;

  let style = 'step';
  if (lightUp) {
    style += ' light-up-step';
  }
  if (currentStepValue === 1) {
    style += ' active-step';
  }

  return (
    <button className={style} onClick={() => handleStepClick(stepNumber, rowNumber)}>
    </button>
  )
}
