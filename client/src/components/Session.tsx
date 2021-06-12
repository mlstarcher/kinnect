import React, { useState, useEffect } from "react";

// import UpdateSequenceForm from "./UpdateSequenceForm";
import SequenceInfo from './SequenceInfo'
import Sequence from "./Sequence";
import WebRTCWatcher from "./WebRTCWatcher";
import Chat from "./Chat"

export default function Session({ socket, currentSequenceDetails }) {
  return (
    <>
      <WebRTCWatcher socket={socket} />
      <SequenceInfo currentSequenceDetails={currentSequenceDetails}/>
      <Sequence socket={socket} currentSequence={currentSequenceDetails.staticSequenceArray} />
      <Chat socket={socket}/>
    </>
  );
}
