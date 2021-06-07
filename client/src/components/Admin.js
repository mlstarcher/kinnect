import React, { useState, useEffect } from 'react';
// import stepSequencer from 'step-sequencer';
import { io } from 'socket.io-client';

import UpdateSequenceForm from './UpdateSequenceForm';
import Sequence from './Sequence';
import PlaybackControls from './PlaybackControls';

const ENDPOINT = 'localhost:4242';

export default function Admin() {
  const [connectionStatus, setConnectionStatus] = useState('Connection Pending...')
  const [loading, setLoading] = useState(true);
  const [currentSequence, setCurrentSequence] = useState()
  const [sequenceWasRendered, setSequenceWasRendered] = useState(false);
  const [socket, setSocket] = useState();

  useEffect(() => {
    let socket = io(ENDPOINT);
    setSocket(socket)
    socket.on('success', response => {
      setConnectionStatus(response);
      setLoading(false);
    })
    socket.on('sequence', sequence => {
      console.log('sequence received')
      setCurrentSequence(sequence)
    })
  }, [])

  if (loading) {
    return (
      <h1>Connecting to Server...</h1>
    )
  } else {
  return (
      <>
        <h2>Status: {connectionStatus}</h2>
        <UpdateSequenceForm socket={socket} />
        <Sequence
          socket={socket}
          currentSequence={currentSequence}
        />
        <PlaybackControls socket={socket} />
      </>
    )
  }
}
