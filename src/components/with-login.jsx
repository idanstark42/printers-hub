import React, { useState } from 'react'

import * as API from '../data/api'

export default function WithLogin (props) {
  const [loggedIn, setLoggedIn] = useState(API.loggedIn())
  const [key, setKey] = useState('')

  const recalcLogin = () => {
    setLoggedIn(API.loggedIn())
    console.log(loggedIn)
  }

  if (loggedIn === false) {
  	return <div className="login">
  		<label>Insert API key:</label>
  		<input type="text" onChange={event => setKey(event.target.value)} />
  		<button onClick={() => API.login(key) && recalcLogin()}>Login</button>
  	</div>
  } else {
    return props.children
  }
}