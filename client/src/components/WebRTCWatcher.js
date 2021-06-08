import React, { useState, useEffect, useRef } from 'react';

let peerConnection;
const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"]
    }
  ]
};

const socket = io.connect(window.location.origin);

export default function WebRTCWatcher() {
  return (
    <div>

    </div>
  )
}
