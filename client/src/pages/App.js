import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Session from '../components/session.js'
import './app.css'

export default function app() {
  return (
    <>
      <Session />
    </>
  )
}

ReactDOM.render(app(), document.getElementById("app"));