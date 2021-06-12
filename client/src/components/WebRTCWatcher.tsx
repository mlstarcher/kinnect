import React, { useState, useEffect, useRef } from "react";

const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"],
    },
  ],
};
let peerConnection;

export default function WebRTCWatcher({ socket }) {
  const [viewingStream, setViewingStream] = useState(false)

  const videoRef = useRef(null);

  useEffect(() => {
    socket.on("offer", (id, description) => {
      console.log('offer received, ', id, description)
      peerConnection = new RTCPeerConnection(config);
      peerConnection
        .setRemoteDescription(description)
        .then(() => peerConnection.createAnswer())
        .then((sdp) => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit("answer", id, peerConnection.localDescription);
        });
      peerConnection.ontrack = (event) => {
        let video = videoRef.current;
        video.srcObject = event.streams[0];
      };
      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("candidate", id, event.candidate);
        }
      };
    });

    socket.on("candidate", (id, candidate) => {
      peerConnection
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch((e) => console.error(e));
    });

    // socket.emit("watcher");
    // socket.on("connect", () => {
    //   console.log('did client succeed and emit a watcher?')
    //   socket.emit("watcher");
    // });

    socket.on("broadcaster", () => {
      console.log('broadcaster')
    });

    socket.emit("watcher");

    // window.onunload = window.onbeforeunload = () => {
    //   socket.close();
    //   peerConnection.close();
    // };
  }, [viewingStream]);

  return (
    <>
      {viewingStream && <video playsInline ref={videoRef} autoPlay muted></video>}
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "0 20%"
        }}>
        <button onClick={() => setViewingStream(true)}>View Livestream</button>
      </div>
    </>
  );
}
