import React from 'react';

export default function PlaybackControls({ socket }) {
  const handlePlay = () => {
    socket.emit('play', {})
  }

  const handleStop = () => {
    socket.emit('stop', {})
  }

    return (
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    )
}
