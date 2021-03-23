import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import * as Tone from 'tone';
// import { Transport, Sequence, Synth } from 'tone';
import './app.css';

const ENDPOINT = 'http://localhost:4242';
let socket;

const GenerateGrid = (steps) => {
  const grid = [];
  for (let i = 0; i < steps; i++) {
    let column = [
      { pin: 4, isActive: false }
    ];
    grid.push(column);
  }
  return grid;
}

export default function app() {
  const [grid, setGrid] = useState(GenerateGrid(8))
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentColumn, setCurrentColumn] = useState(null)
  const [bpm, setBpm] = useState(100)

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.emit('click', 'red');
  }, [])

  const redButtonClick = (e) => {
      e.preventDefault()
      socket.emit('click', 'red')
      console.log('red')
    }
  
  const pinFour = () => {
    socket.emit('click', 'red')
    console.log('pin4 triggered')
  }

  const startTransport = (e) => {
    e.preventDefault()
    Tone.start()
    Tone.Transport.start()
    seq.start(0)
    console.log('Transport Started')
  }

  const stopTransport = (e) => {
    e.preventDefault()
    Tone.Transport.stop();
    console.log('Transport Stopped')
  }

  const seq = new Tone.Sequence((time, note) => {
    if (note.isActive) {
      pinFour()
      console.log('on')

    } else {
      console.log('off')
    }
    // subdivisions are given as subarrays
  }, grid);

  return (
    <>
      <span className="header">
        <h1>Welcome to Kinnect!</h1>
      </span>
      <div className="main-content-container">
        <div className="button-container">
          {/* <button id="red-button" className="red" onClick={redButtonClick}>Red</button> */}
          <button id="red-button" className="red" onClick={stopTransport}>Stop</button>
          <button id="green-button" className="green" onClick={startTransport}>Start</button>
        </div>
        {/* <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>         */}
      </div>
    </>
  )
}
