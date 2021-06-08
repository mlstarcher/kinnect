import React, { useState, useEffect } from 'react';

import UpdateSequenceForm from './UpdateSequenceForm';
import Sequence from './Sequence';
import PlaybackControls from './PlaybackControls';
import WebRTCBroadcast from './WebRTCBroadcast';

export default function Admin({ socket }) {
  const [currentSequence, setCurrentSequence] = useState()
  const [sequenceWasRendered, setSequenceWasRendered] = useState(false);

  useEffect(() => {
    socket.on('sequence', sequence => {
      setCurrentSequence(sequence)
    })
  }, [])

  return (
      <>
        <WebRTCBroadcast socket={socket} />
        <Sequence
          socket={socket}
          currentSequence={currentSequence}
        />
        <PlaybackControls socket={socket} />
      </>
    )
}
