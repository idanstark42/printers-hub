import React from 'react'
import { useParams } from 'react-router-dom'

export default function Printer () {
  const { id } = useParams()

  return <div className="printer"></div>
}