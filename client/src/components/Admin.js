import React, { useState, useEffect } from 'react';
// import stepSequencer from 'step-sequencer';
import { io } from 'socket.io-client';

import CreateSequenceForm from './CreateSequenceForm';
import Sequence from './Sequence';

const ENDPOINT = 'localhost:4242';

export default function Admin() {
  const [connectionStatus, setConnectionStatus] = useState('Connection Pending...')
  const [loading, setLoading] = useState(true);
  const [sequenceWasRendered, setSequenceWasRendered] = useState(false);
  const [socket, setSocket] = useState();

  useEffect(() => {
    let socket = io(ENDPOINT);
    setSocket(socket)
    socket.on('success', response => {
      setConnectionStatus(response);
      setLoading(false);
    })
    // socket.on('sequence', sequence => {
    //   setSequenceWasRendered(true);
    //   console.log('so this never runs?')
    // })

  }, [])

  if (loading) {
    return (
      <h1>Connecting to Server...</h1>
    )
  } else {
  return (
      <>
        <h2>Status: {connectionStatus}</h2>
        {sequenceWasRendered ? <button onClick={() => setSequenceWasRendered(false)}>Create New Sequence</button> : <CreateSequenceForm socket={socket} />}
          {/* {sequenceWasRendered ? <Sequence socket={socket} /> : <></>} */}
        <Sequence
          socket={socket}
          sequenceWasRendered={sequenceWasRendered}
          setSequenceWasRendered={setSequenceWasRendered}
          />
      </>
    )
  }
}
