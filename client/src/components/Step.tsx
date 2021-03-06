import React, { useState } from "react";

export default function sessionStep({
  currentStepValue,
  columnNumber,
  stepNumber,
  socket,
}) {
  const buttonContent = currentStepValue ? "On" : "Off";
  return (
    <button
      onClick={() => socket.emit("stepClick", { columnNumber, stepNumber })}
    >
      {buttonContent}
    </button>
  );
}
