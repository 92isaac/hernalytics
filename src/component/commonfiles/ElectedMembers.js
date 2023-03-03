import React from 'react'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'

const ElectedMembers = () => {
  return (
    <div className='uppercase rounded-md border-lines max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 text-white'>
        <div className="pt-10">
            <h1>Total Elected Members</h1>
            <h2 className='font-bold'>10,000</h2>
        </div>
        <div className="pt-10">
            <h1>Male <BsGenderMale style={{color: '#E5B805', display: 'inline'}}/></h1>
            <h2 className='font-bold'>10,000</h2>
        </div>
        <div className="pt-10">
            <h1>Female <BsGenderFemale style={{color: '#E5B805', display: 'inline'}}/></h1>
            <h2 className='font-bold'>10,000</h2>
        </div>
    </div>
  )
}

export default ElectedMembers