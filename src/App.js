import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Printers from './components/printers'
import Printer from './components/printer'

import './App.css'

export default function App() {
  return <div className='main'>
    <Router>
      <Switch>
        <Route path="/:id"><Printer /></Route>
        <Route path="/"><Printers /></Route>
      </Switch>
    </Router>
  </div>
}
