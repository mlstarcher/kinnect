import React, { useState, useEffect } from "react";

import Column from "./Column";
import SequenceInfo from './SequenceInfo'
import "./sequence.css";

export default function Sequence({ socket, currentSequenceDetails }) {
  const [activeColumnNumber, setActiveColumnNumber] = useState(0);

  useEffect(() => {
    socket.on("stepNumber", (step) => {
      setActiveColumnNumber(step);
    });
  }, []);

  return (
    <div>
      <SequenceInfo currentSequenceDetails={currentSequenceDetails}/>
      <div
        className="sequencer-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {(currentSequenceDetails.staticSequenceArray || [[]]).map((columnDataArray, index) => {
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
    </div>
  );
}
