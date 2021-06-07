import React from 'react';

export default function PlaybackControls({ socket }) {
  const handlePlay = () => {
    socket.emit('play', {})
    // console.log('Play click handler ran')
  }

  const handleStop = () => {
    socket.emit('stop', {})
    // console.log('Stop click handler ran')
  }

    return (
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    )
}
