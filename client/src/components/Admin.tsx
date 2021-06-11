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
      <UpdateSequenceFrom socket={socket}/>
      <WebRTCBroadcast socket={socket} />
      <Sequence socket={socket} currentSequence={currentSequenceDetails.staticSequenceArray} />
      <PlaybackControls socket={socket} />
    </>
  );
}
