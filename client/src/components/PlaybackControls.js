import React, { useState, useEffect } from 'react';

export default function PlaybackControls({ socket }) {
  console.log('socket is: ', socket)
  const handlePlay = () => {
    socket.emit('play', {})
    console.log('Play click handler ran')
  }

  const handleStop = () => {
    socket.emit('stop', {})
    console.log('Stop click handler ran')
  }

    return (
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    )
}
