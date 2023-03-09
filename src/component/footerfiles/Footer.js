import React from 'react'
import Address from './Address'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    // <footer className='bg-gray-800'>
    <footer className='md:flex justify-between max-w-7xl mx-auto px-4 md:py-16 sm:px-6 lg:px-8 pt-20 rounded-md border-lines' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
        <Address />
        <FooterLinks />
    </footer>
    // </footer>
  )
}

export default Footer