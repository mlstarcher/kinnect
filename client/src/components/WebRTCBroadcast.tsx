import React, { useState, useEffect, useRef } from "react";

const peerConnections = {};
const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"],
    },
  ],
};
const constraints = {
  video: true,
  audio: true
};

let video;

export default function WebRTCBroadcast({ socket }) {
  const [stream, setStream] = useState(null);
  const [showStream, setShowStream] = useState(false)

  const userVideo = useRef(null);

  const enableVideo = () => {
    setShowStream(true);
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((currentStream) => {
          setStream(currentStream);
        })
        .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (userVideo.current) {
      userVideo.current.srcObject = stream;
    }
    socket.emit("broadcaster");
    console.log('useEffect, stream: ', stream)
  }, [stream])

  useEffect(() => {
    socket.on("watcher", id => {
      console.log('watcher admin side', id, stream)
      const peerConnection = new RTCPeerConnection(config);
      peerConnections[id] = peerConnection;

      if (stream) {
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
      }
    });

      socket.on("answer", (id, description) => {
        peerConnections[id].setRemoteDescription(description);
      });

      socket.on("candidate", (id, candidate) => {
        peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
      });

      // socket.on("disconnectPeer", id => {
      //   peerConnections[id].close();
      //   delete peerConnections[id];
      // });

      // return window.onunload = window.onbeforeunload = () => {
      //   socket.close();
      // };
  }, [stream])

  return (
    <>
      {showStream && <video playsInline ref={userVideo} autoPlay muted></video>}
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "0 20%"
        }}>
      <button onClick={enableVideo}>Start Streaming</button>
      </div>
    </>
  );
}
