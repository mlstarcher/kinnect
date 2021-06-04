import React, { useState, useEffect } from 'react';

export default function PlaybackControls({ sequenceWasRendered }) {
  if (sequenceWasRendered) {
    return (
      <div>
        <button>Play</button>
        <button>Stop</button>
      </div>
    )
  }
  else {
    return (
      <>
      </>
    )
  }
}
