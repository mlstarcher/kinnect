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
  video: { facingMode: "user" },
  // audio: true
}

export default function WebRTC({ socket }) {
  const [streamVideo, setStreamVideo] = useState(false)

  const videoRef = useRef(null);

  useEffect(() => {

  }, [])

  const enableVideo = () => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(currentStream => {
        let video = videoRef.current;
        video.srcObject = currentStream;
        socket.emit("broadcaster");
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
    <>
      <video playsInline ref={videoRef} autoPlay ></video>
      <button onClick={enableVideo}>Start Video</button>
    </>
  )
}