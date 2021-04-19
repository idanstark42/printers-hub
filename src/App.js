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
          <Route path="/printer/new" component={NewPrinter} />
          <Route path="/printer/:name" component={Printer} />
          <Route path="/" component={Printers} />
        </Switch>
      </Router>
    </WithLogin>
  </div>
}
