import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Transport, } from 'tone';
import './app.css';

// const socket = io.connect('http://loacalhost:4242')
const ENDPOINT = 'http://localhost:4242';
let socket;

export default function app() {

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.emit('click', 'red');

    // if (Tone.context.state !== 'running') Tone.context.resume();
  }, [])

  const redButtonClick = (e) => {
      e.preventDefault()
      socket.emit('click', 'red')
      console.log('red')
    }

  const greenButtonClick = (e) => {
    e.preventDefault()
    socket.emit('click', 'green')
    console.log('green')
  }

  // document.documentElement.addEventListener('mousedown', () => {
  //   if (Tone.context.state !== 'running') Tone.context.resume();
  // });
  
  const $rows = document.body.querySelectorAll('div > div'),
        notes = ['G5', 'E4', 'C3'];
  let index = 0;
  
  Transport.scheduleRepeat(repeat, '8n');
  Transport.start();
  
  function repeat(time) {
    let step = index % 8;
    for (let i = 0; i < $rows.length; i++) {
          note = notes[i],
          $row = $rows[i],
          $input = $row.querySelector(`input:nth-child(${step + 1})`);
      if ($input.checked) {
        console.log('Ding!')
        redButtonClick()
      };
    }
    index++;
  }
  

  return (
    <>
      <span className="header">
        <h1>Welcome to Kinnect!</h1>
      </span>
      <div className="main-content-container">
        <div className="button-container">
          <button id="red-button" className="red" onClick={redButtonClick}>Red</button>
          <button id="green-button" className="green" onClick={greenButtonClick}>Green</button>
          <h6>Red:</h6>
          <div>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </>
  )
}
