import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { io } from 'socket.io-client';

import Session from './Session'
import Admin from './Admin'
// import './app.css'

const ENDPOINT = 'localhost:4242';

export default function App() {
  const [connectionStatus, setConnectionStatus] = useState('Connection Pending...')
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState();

  useEffect(() => {
    let socket = io(ENDPOINT);
    setSocket(socket)
    socket.on('success', response => {
      setConnectionStatus(response);
      setLoading(false);
    })
  }, [])

  useEffect(() => {

  }, [socket])

    return (
      <>
        <h1>Connecting to Server...</h1>
        <h2>Status: {connectionStatus}</h2>
      </>
    )
  // else {
  //   return (
  //     <Router>
  //       <header className="header">
  //         <h1>Welcome to Kinnect!</h1>
  //         <h2>Status: {connectionStatus}</h2>
  //       </header>
  //       <Switch>
  //         <Route exact path="/" render={() => <Session socket={socket} />} />
  //         <Route path="/admin" render={() => <Admin socket={socket}/>} />
  //       </Switch>
  //       <Link to="/">
  //         <h4>Home</h4>
  //       </Link>
  //       <Link to="/admin">
  //         <h4>Admin</h4>
  //       </Link>
  //     </Router>
  //   )
  // }
}
