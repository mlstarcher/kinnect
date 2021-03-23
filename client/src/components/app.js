import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import './app.css'

// const socket = io.connect('http://loacalhost:4242')
const ENDPOINT = 'http://localhost:4242';
let socket;

export default function app() {

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.emit('click', 'red');
  }, [])

  const redButtonClick = (e) => {
      e.preventDefault()
      socket.emit('click', 'red')
      console.log('alright alright alright')
    }

  return (
    <>
      <span className="header">
        <h1>Welcome to Kinnect!</h1>
      </span>
      <div className="main-content-container">
        <div className="button-container">
          <button id="red-button" className="red" onClick={redButtonClick}>Red</button>
          {/* <button id="green-button" className="green">Green</button> */}
          {/* <button id="blue-button" className="blue">Blue</button> */}
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
