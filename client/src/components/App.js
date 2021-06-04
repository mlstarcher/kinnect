import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Session from './Session'
import Admin from './Admin'
// import './app.css'

export default function App() {
  return (
    <Router>
      <header>
      <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/admin">
          <h1>Admin</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" render={() => <Session />} />
        <Route path="/admin" render={() => <Admin />} />
      </Switch>
    </Router>
  )
}
