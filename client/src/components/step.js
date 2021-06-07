import React, { useState } from 'react'

export default function sessionStep({
  currentStepValue,
  columnNumber,
  stepNumber
}) {
  return (
    <button>{stepNumber}</button>
  )
}
