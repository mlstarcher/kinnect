import React, { useState, useEffect } from 'react';

export default function PlaybackControls({ socket }) {
    return (
      <div>
        <button>Play</button>
        <button>Stop</button>
      </div>
    )
}
