import React, { useState, useEffect, useRef } from 'react';

const peerConnections = {};
const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"]
    }
  ]
};
const constraints = {
  video: true,
  // audio: true
}

export default function WebRTC({ socket }) {
  const [stream, setStream] = useState(null)

  const videoRef = useRef(null);

  useEffect(() => {
    hasGetUserMedia()
  })

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(currentStream => {
        setStream(currentStream)
        let video = videoRef.current;
        video.srcObject = stream;
        console.log(videoRef)
        // myVideo.current.srcObject = currentStream;
        // socket.emit("broadcaster");
      })
      .catch(error => console.error(error));
  }

  function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }
  if (hasGetUserMedia()) {
    // Good to go!
  } else {
    alert("getUserMedia() is not supported by your browser");
  }
  return (
    <div>
      <video  ref={videoRef} autoPlay></video>
      <button onClick={startVideo}>Start Video</button>
    </div>
  )
}

// playsInline
// autoPlay