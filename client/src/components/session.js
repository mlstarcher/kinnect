import React, { useState, useEffect } from 'react';
// import stepSequencer from 'step-sequencer';
import { io } from 'socket.io-client';

import UpdateSequenceForm from './UpdateSequenceForm';
import Sequence from './Sequence';
import PlaybackControls from './PlaybackControls';


export default function Session({ socket }) {
  const [currentSequence, setCurrentSequence] = useState()
  const [sequenceWasRendered, setSequenceWasRendered] = useState(false);

  useEffect(() => {
    socket.on('sequence', sequence => {
      setCurrentSequence(sequence)
    })
  }, [])

  return (
    <>
      <h2>Status: {connectionStatus}</h2>
      {/* <UpdateSequenceForm socket={socket} /> */}
      <Sequence
        socket={socket}
        currentSequence={currentSequence}
      />
      {/* <PlaybackControls socket={socket} /> */}
    </>
  )
}
