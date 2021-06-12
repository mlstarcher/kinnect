import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { io } from "socket.io-client";

import Session from "./Session";
import Admin from "./Admin";
import About from "./About"
import Nav from "./Nav";
// import './app.css'

const ENDPOINT = "localhost:4242";

export default function App() {
  const [connectionStatus, setConnectionStatus] = useState(
    "Connection Pending..."
  );
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState({});
  const [currentSequenceDetails, setCurrentSequenceDetails] = useState();

  useEffect(() => {
    let socket = io(ENDPOINT);
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
      <>
        <Router>
          <Nav />
          <header className="header">
            <h1>Welcome to Kinnect!</h1>
            <h2>Status: {connectionStatus}</h2>
          </header>
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
      </>
    );
  }
}
