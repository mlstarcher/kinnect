import React, { useState, useEffect } from 'react';
// import stepSequencer from 'step-sequencer';
import { io } from 'socket.io-client';

import CreateSequenceForm from './CreateSequenceForm';
import Sequence from './Sequence';


const ENDPOINT = 'localhost:4242';

export default function Admin() {
  const [connectionStatus, setConnectionStatus] = useState('Connection Pending...')
  const [loading, setLoading] = useState(true);
  // const [currentSequence, setCurrentSequence] = useState()
  // const [currentStepNumber, setCurrentStepNumber] = useState(0)
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
      // console.log('sequence received by Admin: ', sequence)
      // setCurrentSequence(sequence)
      setSequenceWasRendered(true);
    })
    // socket.on('step', step => {
    //   setcurrentStepNumber(step);
    // })
  }, [])

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } else {
  return (
      <>
        <h2>Status: {connectionStatus}</h2>
        <CreateSequenceForm
          socket={socket}
          sequenceWasRendered={sequenceWasRendered}
          setSequenceWasRendered={setSequenceWasRendered}
          />
          {/* {sequenceWasRendered ? <Sequence socket={socket} /> : <></>} */}
        <Sequence socket={socket} />
      </>
    )
  }
}
