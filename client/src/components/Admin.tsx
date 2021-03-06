import React, { useState, useEffect } from "react";

// import UpdateSequenceForm from "./UpdateSequenceForm";
import Sequence from "./Sequence";
import PlaybackControls from "./PlaybackControls";
import UpdateSequenceFrom from "./UpdateSequenceForm";
import WebRTCBroadcast from "./WebRTCBroadcast";

export default function Admin({ socket, currentSequenceDetails }) {
  return (
    <>
      <WebRTCBroadcast socket={socket} />
      <Sequence socket={socket} currentSequenceDetails={currentSequenceDetails} />
      <PlaybackControls socket={socket} />
      <UpdateSequenceFrom socket={socket} currentSequenceDetails={currentSequenceDetails}/>
    </>
  );
}
