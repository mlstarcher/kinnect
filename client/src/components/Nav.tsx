import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", margin: "0 30%"}}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/admin">
        <h4>Admin</h4>
      </Link>
      <Link to="/about">
        <h4>About</h4>
      </Link>
    </nav>
  )
}
