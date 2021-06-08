import React, { useState, useEffect } from 'react';

import UpdateSequenceForm from './UpdateSequenceForm';
import Sequence from './Sequence';
import PlaybackControls from './PlaybackControls';
import WebRTCBroadcast from './WebRTCBroadcast';

export default function Admin({ socket, currentSequence }) {

  console.log(currentSequence)
  return (
      <>
        <WebRTCBroadcast socket={socket} />
        <Sequence
          socket={socket}
          currentSequence={currentSequence}
        />
        <PlaybackControls socket={socket} />
      {/* <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
      </div> */}
      </>
    )
}
