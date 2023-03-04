import React from 'react'
import Logo from '../../asset/Hernalytics Full Logo Yellow@3x 1.png'

const Address = () => {
    const currentYear = new Date().getFullYear().toString()
  return (
    <div className='text-white'>
        <img src={Logo} alt="logo" />
        <p>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
        <p>&copy; {currentYear} Hernalytics</p>
    </div>
  )
}

export default Address