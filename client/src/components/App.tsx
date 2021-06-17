import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { io } from "socket.io-client";

import Session from "./Session";
import Admin from "./Admin";
import About from "./About"
import Header from "./Header";
import Chat from "./Chat"
import "./app.css"

const ENDPOINT = "http://ee24abaab43f.ngrok.io";

export default function App() {
  const [connectionStatus, setConnectionStatus] = useState(
    "Connection Pending..."
  );
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState({});
  const [currentSequenceDetails, setCurrentSequenceDetails] = useState();

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("success", (response) => {
      setSocket(socket);
      setConnectionStatus(response);
    });
    socket.on("sequence", (sequenceDetails) => {
      setCurrentSequenceDetails(sequenceDetails);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <h1>Connecting to Server...</h1>
        <h2>Status: {connectionStatus}</h2>
      </>
    );
  } else {
    return (
      <div className="app-container">
        <div className="column-one">
        <Router>
          <Header connectionStatus={connectionStatus}/>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Session socket={socket} currentSequenceDetails={currentSequenceDetails} />
              )}
            />
            <Route
              path="/admin"
              render={() => (
                <Admin socket={socket} currentSequenceDetails={currentSequenceDetails} />
              )}
            />
            <Route
              path="/about"
              render={() => (
                <About />
              )}
            />
          </Switch>
        </Router>
        </div>
        <div className="column-two">
          <Chat socket={socket}/>
        </div>
      </div>
    );
  }
}
