import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 '>
      <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>Jaydeep 👋</span></h1>
      <button className="bg-red-600 text-white px-5 py-2 active:scale-95  
      cursor-pointer 
      text-lg font-medium
      rounded-sm">Log Out</button>
    </div>
  )
}

export default Header