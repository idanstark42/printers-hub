import React from 'react'
import { Link } from 'react-router-dom'
import PrinterCollection from '../data/printers'
import { FaPlus, FaPrint } from 'react-icons/fa'

export default function Printers () {
  const printersCollection = new PrinterCollection()

  return <div className="printers">
    {printersCollection.printers.map(printer => <div className="printer-card">
      <div className="title">
        <FaPrint />
      </div>
    </div>)}
    <div className="printer-card add">
      <FaPlus />
      Add printer
    </div>
  </div>
}