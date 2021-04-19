import React, { useState } from 'react'

import * as API from '../data/api'

export default function WithLogin (props) {
  const loggedIn = API.loggedIn()

  const [key, setKey] = useState('')

  if (loggedIn === false) {
  	return <div className="login">
  		<label>Insert API key:</label>
  		<input type="text" onChange={event => setKey(event.target.value)} />
  		<button onClick={() => API.login(key)}>Login</button>
  	</div>
  } else {
    return props.children
  }
}