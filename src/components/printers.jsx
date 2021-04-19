import React from 'react'
import { Link } from 'react-router-dom'
import PrinterCollection from '../data/printers'
import { FaPlus, FaPrint } from 'react-icons/fa'

export default function Printers () {
  const printersCollection = new PrinterCollection()
  
  return <div className="printers">
    {printersCollection.printers.map(printer => <Link className="printer-card" to={`/printer/${printer.name}`}>
      <div className="title">
        <FaPrint />
        {printer.name}
      </div>
    </Link>)}
    <Link className="printer-card add" to="/printer/new">
      <FaPlus />
      Add printer
    </Link>
  </div>
}