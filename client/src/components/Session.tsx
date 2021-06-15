import React, { useState, useEffect } from "react";

// import UpdateSequenceForm from "./UpdateSequenceForm";
import Sequence from "./Sequence";
import WebRTCWatcher from "./WebRTCWatcher";

export default function Session({ socket, currentSequenceDetails }) {
  return (
    <>
      <WebRTCWatcher socket={socket} />
      <Sequence
        socket={socket}
        currentSequence={currentSequenceDetails.staticSequenceArray}
        currentSequenceDetails={currentSequenceDetails}
       />
    </>
  );
}
