import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import WithLogin from './components/with-login'

import Printers from './components/printers'
import NewPrinter from './components/new-printer'
import Printer from './components/printer'

import './App.css'

export default function App() {
  return <div className='main'>
    <WithLogin>
      <Router>
 	      <Switch>
          <Route path="/printer/new"><NewPrinter /></Route>
          <Route path="/printer/:name"><Printer /></Route>
          <Route path="/"><Printers /></Route>
        </Switch>
      </Router>
    </WithLogin>
  </div>
}
