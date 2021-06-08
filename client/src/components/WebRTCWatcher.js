import React, { useState, useEffect, useRef } from 'react';

let peerConnections;
const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"]
    }
  ]
};

export default function WebRTCWatcher({ socket }) {
  const [stream, setStream] = useState(null)

  const videoRef = useRef(null);

  useEffect(() => {
    socket.on("offer", (id, description) => {
      peerConnection = new RTCPeerConnection(config);
      peerConnection
        .setRemoteDescription(description)
        .then(() => peerConnection.createAnswer())
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit("answer", id, peerConnection.localDescription);
        });
      peerConnection.ontrack = event => {
        video.srcObject = event.streams[0];
      };
      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit("candidate", id, event.candidate);
        }
      };
    });
    socket.on("candidate", (id, candidate) => {
      peerConnection
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch(e => console.error(e));
    });

    socket.on("connect", () => {
      socket.emit("watcher");
    });

    socket.on("broadcaster", () => {
      socket.emit("watcher");
    });

    // window.onunload = window.onbeforeunload = () => {
    //   socket.close();
    //   peerConnection.close();
    // };
  }, [])

  // const enableVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia(constraints)
  //     .then(currentStream => {
  //       let video = videoRef.current;
  //       video.srcObject = currentStream;
  //       socket.emit("broadcaster");
  //     })
  //     .catch(error => console.error(error));
  // }

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
    </>
  )
}