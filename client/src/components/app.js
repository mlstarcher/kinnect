import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Session from './session.js'
import Admin from './admin.js'

export default function app() {
  return (
    <Router>
      <div>
      <Switch>
        <Route path="/" exact component={Admin} />
        <Route path="/admin" component={Session} />
      </Switch>
      </div>
    </Router>
  )
}
