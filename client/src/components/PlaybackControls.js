import React, { useState, useEffect } from 'react';

export default function PlaybackControls({ socket }) {
  const handlePlay = () => {
    socket.emit('play', 'play')
  }

  const handleStop = () => {
    socket.emit('stop', 'stop')
  }

    return (
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    )
}
