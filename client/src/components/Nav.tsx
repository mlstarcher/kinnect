import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{ display: "flex", justifyContent: "center"}}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/admin">
        <h4>Admin</h4>
      </Link>
    </nav>
  )
}
