import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Session from './Session'
import Admin from './Admin'
// import './app.css'

export default function App() {
  return (
    <Router>
      <header className="header">
        <h1>Welcome to Kinnect!</h1>
      </header>
      <Switch>
        <Route exact path="/" render={() => <Session />} />
        <Route path="/admin" render={() => <Admin />} />
      </Switch>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/admin">
        <h4>Admin</h4>
      </Link>
    </Router>
  )
}
