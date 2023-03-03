import React from 'react'
import Address from './Address'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 rounded-md border-lines' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
        <Address />
    </div>
  )
}

export default Footer