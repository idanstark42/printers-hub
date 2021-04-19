import React, { useState, useEffect } from 'react'

import { connectionOptions } from '../data/connection'
import PrinterCollection from '../data/printers'
import Printer from '../data/printer'

export default function NewPrinter (props) {
  const printerCollection = new PrinterCollection()
  
  const [name, setName] = useState('')
  const [port, setPort] = useState('')
  const [baudrate, setBaudrate] = useState('')
  const [printerProfile, setPrinterProfile] = useState('')

  const [ports, setPorts] = useState([])
  const [baudrates, setBaudrates] = useState([])
  const [printerProfiles, setPrinterProfiles] = useState([])

  useEffect(async () => {
    const options = await connectionOptions()
    setPorts(options.ports)
    setBaudrates(options.baudrates)
    setPrinterProfiles(options.printerProfiles)
  })

  const submit = () => {
    const printer = new Printer({ name, connection: { port, baudrate, printerProfile } })
    printerCollection.addPrinter(printer)
  }


  if (!ports) {
    return <div className="loader"></div>
  }

  return <div className="new-printer">
    <input name="name" onChange={event => setName(event.target.value)} />
    <select name="ports" value={port} onChange={event => setPort(event.target.value)}>
      {ports.map(p => <option key={p} value={p}>{p}</option>)}
    </select>
    <select name="baudrates" value={baudrate} onChange={event => setBaudrate(event.target.value)}>
      {baudrates.map(b => <option key={b} value={b}>{b}</option>)}
     </select>
    <select name="printerProfiles" value={printerProfile} onChange={event => setPrinterProfile(event.target.value)}>
      {printerProfiles.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
    </select>
    <button onClick={submit}>Add</button>
  </div>
}