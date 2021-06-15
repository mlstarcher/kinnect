import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./header.css"

export default function Header({ connectionStatus }) {
  return (
    <header>
      <div>
        <h3>Kinnect</h3>
        <h3>Status: {connectionStatus}</h3>
      </div>
      <nav>
        <Link to="/">
          <h4>Home|</h4>
        </Link>
        {/* <Link to="/admin">
          <h4>Admin|</h4>
        </Link> */}
        <Link to="/about">
          <h4>About</h4>
        </Link>
      </nav>
    </header>
  )
}
