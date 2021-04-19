import React from 'react'
import { useParams } from 'react-router-dom'

import Camera from './camera'
import Status from './status'

import Printer from '../data/printer'

export default function PrinterScreen () {
  const { name } = useParams()
  const printer = Printer.load(name)

  return <div className="printer">
    <Camera printer={printer} />
    <Status printer={printer} />
  </div>
}