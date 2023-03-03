import React from 'react'
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const FooterLinks = () => {
  return (
    <div className='md:flex text-white gap-x-20 leading-10'>
        <div className="pt-4">
        <h4 className='font-bold'>About</h4>
        <ul className=''>
            <li>Our Story</li>
            <li>Blog</li>
            <li>About Hernalytics</li>
            <li>Videos</li>
        </ul>
        </div>
        <div className="pt-4">
        <h4 className='font-bold'>Support</h4>
        <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
        </ul>
        </div>
        <div className="pt-4">
        <h4 className='font-bold'>Lets Chat</h4>
        <ul>
            <li>hernalytics@gmail.com</li>
            <li>+234 801 234 5678</li>
            <li className='inline-flex gap-10'><FaInstagram /> <FaTwitter /> <FaWhatsapp /></li>
        </ul>
        </div>
    </div>
  )
}

export default FooterLinks