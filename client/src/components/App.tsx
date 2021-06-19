import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { io } from "socket.io-client";

import Session from "./Session";
import Admin from "./Admin";
import About from "./About"
import Header from "./Header";
import Chat from "./Chat"
import "./app.css"

const ENDPOINT = "localhost:4242";
// let socket;

export default function App() {
  const [connectionStatus, setConnectionStatus] = useState(
    "Connection Pending..."
  );
  const [loading, setLoading] = useState(true);
  const [currentSequenceDetails, setCurrentSequenceDetails] = useState();
  const [messagesArray, setMessagesArray] = useState([])

  const socketClientRef = useRef()

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("success", (response) => {
      setConnectionStatus(response);
    });
    socket.on("sequence", (sequenceDetails) => {
      console.log('new Sequence Received', sequenceDetails)
      setCurrentSequenceDetails(sequenceDetails);
      setLoading(false);
    });
    // socket.on("messages", (messages) => {
    //   console.log('First Load Messages Array: ', messages)
    //   setMessagesArray(messages);
    // })
    socket.on("newMessage", (message) => {
      console.log('New Message listener array: ', message)
      // setMessagesArray(message);
      setMessagesArray(oldMessages => [...oldMessages, message]);
    })
    socketClientRef.current = socket;
    return () => {
      socket.removeAllListeners()
    }
  }, []);

  if (loading) {
    return (
      <div className="connecting">
        <h1>Connecting to Server...</h1>
      </div>
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
                <Session socket={socketClientRef.current} currentSequenceDetails={currentSequenceDetails} />
              )}
            />
            <Route
              path="/admin"
              render={() => (
                <Admin socket={socketClientRef.current} currentSequenceDetails={currentSequenceDetails} />
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
          <Chat
            socket={socketClientRef.current}
            messagesArray={messagesArray}
            />
        </div>
      </div>
    );
  }
}
