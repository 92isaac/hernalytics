import React from 'react'
import { geopoliticalZone } from './data'

const Legend = () => {
  return (
    <div className="absolute bottom-0 right-0">
    {geopoliticalZone.map((result) => (
      <div className="flex" key={result.name}>
        <div className={`${result.color} h-2 w-2`}></div>
        <h3 className="capitalize ml-1 text-color text-xs md:text-sm">{result.name} <span>{result.total}</span></h3>
      </div>
    ))}
  </div>
  )
}

export default Legend