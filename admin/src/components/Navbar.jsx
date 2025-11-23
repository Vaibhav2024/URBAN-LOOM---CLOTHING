import React from 'react'
import { assets } from '../assets/assets.js'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
        <img className='w-[10%]' src={assets.new_logo} alt="" />
        <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>Log out</button>
    </div>
  )
}

export default Navbar