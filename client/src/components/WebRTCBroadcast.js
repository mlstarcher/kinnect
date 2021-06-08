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

let video;

export default function WebRTCBroadcast({ socket }) {
  const [stream, setStream] = useState(null)

  const videoRef = useRef(null);

  useEffect(() => {
    socket.on("watcher", id => {
      const peerConnection = new RTCPeerConnection(config);
      peerConnections[id] = peerConnection;

      let stream = video.srcObject;
      console.log('stream: ', stream)
      stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit("candidate", id, event.candidate);
        }
      };
      peerConnection
        .createOffer()
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit("offer", id, peerConnection.localDescription);
        });
    });
    socket.on("answer", (id, description) => {
      peerConnections[id].setRemoteDescription(description);
    });
    socket.on("candidate", (id, candidate) => {
      peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
    });
    socket.on("disconnectPeer", id => {
      peerConnections[id].close();
      delete peerConnections[id];
    });
    window.onunload = window.onbeforeunload = () => {
      socket.close();
    };
  }, [])

  const enableVideo = () => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(currentStream => {
        video = videoRef.current;
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
      <video playsInline ref={videoRef} autoPlay muted></video>
      <button onClick={enableVideo}>Start Video</button>
    </>
  )
}