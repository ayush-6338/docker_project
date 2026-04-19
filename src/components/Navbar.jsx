import React from 'react'
import reactLogo from "../assets/react.svg"

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between item-center  p-4 bg-gray-200'>
        <div>
            <img src={reactLogo} alt='logo'/>
        </div>
        <div className='space-x-6 '>
            <span>Home</span>
            <span>about</span>
            <span>contact</span>
        </div>
        <div className="bg-red-500 p-2 rounded-md">
            <button >search</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
