import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Mapcontrols = () => {
  return (
    <div className='relative'>
        <div className="block m-10">
            <button className='rounded-t-md block bg-slate-300 p-3 mb-2'><FaPlus /></button>
            <button className='rounded-b-md block bg-slate-300 p-3'><FaMinus /></button>
        </div>

        <div className="absolute bottom-0">
            <div className="flex">
                <div className="h-8 w-8 apc mb-4">

                </div>
                <p className='uppercase ml-4 text-color'>APC</p>
            </div>
            <div className="flex">
                <div className="h-8 w-8 lp mb-4">

                </div>
                <p className='uppercase ml-4 text-color'>lP</p>
            </div>
            <div className="flex">
                <div className="h-8 w-8 pdp mb-4">

                </div>
                <p className='uppercase ml-4 text-color'>lP</p>
            </div>
        </div>
    </div>
  )
}

export default Mapcontrols