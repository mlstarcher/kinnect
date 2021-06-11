import React, { useState, useEffect } from "react";

// import UpdateSequenceForm from "./UpdateSequenceForm";
import Sequence from "./Sequence";
import PlaybackControls from "./PlaybackControls";
import UpdateSequenceFrom from "./UpdateSequenceForm";
import WebRTCBroadcast from "./WebRTCBroadcast";

export default function Admin({ socket, currentSequenceDetails }) {
  console.log(currentSequenceDetails)
  return (
    <>

      <WebRTCBroadcast socket={socket} />
      <UpdateSequenceFrom socket={socket} currentSequenceDetails={currentSequenceDetails}/>
      <Sequence socket={socket} currentSequence={currentSequenceDetails.staticSequenceArray} />
      <PlaybackControls socket={socket} />
    </>
  );
}
