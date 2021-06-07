import React, { useState } from 'react'

export default function sessionStep({
  currentStepValue,
  columnNumber,
  stepNumber,
  socket
}) {
  return (
    <button onClick={() => socket.emit('stepClick', { columnNumber, stepNumber })}>{currentStepValue}</button>
  )
}
