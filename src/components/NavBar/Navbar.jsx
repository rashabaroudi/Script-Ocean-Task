import React from 'react'
import { AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center  p-4'>
      <div className='flex items-center'>
          <div className='cursor-pointer'>
              <AiOutlineMenu size={30}/>
          </div>

        {/* left Side in navbar */}
        <h1 className='text-2xl  sm:text-3xl lg:text-4xl p-4'>
          Best 
          <strong className='font-bold '>Eats</strong>
        </h1>
        <div className='hidden lg:flex rounded-full bg-slate-200 text-[16px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2 '>Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className='flex items-center px-2 bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]'>

        <AiOutlineSearch size={25} className='text-gray-700 '/>
        <input className='bg-transparent p-2 focus:outline-none w-full' type='text' placeholder='Search foods'/>

      </div>
      {/* add cart button */}
      <button  className=' bg-black text-white  hidden md:flex  items-center py-1 rounded-full ' >  
        
        <BsFillCartFill size={20} className='mr-2'/> Cart</button>
    </div>
  )
}

export default Navbar
