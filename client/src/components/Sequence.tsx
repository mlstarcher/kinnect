import React, { useState, useEffect } from "react";

import Column from "./Column";

export default function Sequence({ socket, currentSequence }) {
  const [activeColumnNumber, setActiveColumnNumber] = useState(0);

  useEffect(() => {
    socket.on("stepNumber", (step) => {
      setActiveColumnNumber(step);
    });
  }, []);

  return (
    <div
      className="sequencer-container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {(currentSequence || [[]]).map((columnDataArray, index) => {
        return (
          <Column
            activeColumnNumber={activeColumnNumber}
            columnDataArray={columnDataArray}
            columnNumber={index}
            socket={socket}
            key={index}
          />
        );
      })}
    </div>
  );
}
