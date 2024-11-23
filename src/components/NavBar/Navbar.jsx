import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button';

const Navbar = () => {

  
 

  const [showNav,setShowNav]=useState(false);
  const links =[
    {
      id:1,
      name:'home',
      route:'/'
    },
    {
      id:2,
      name:'theme',
      route:'/theme'
    },
    {
      id:3,
      name:'extensions',
      route:'/extensions'
    },
    {
      id:4,
      name:'pricing',
      route:'/pricing'
    },
    {
      id:5,
      name:'about',
      route:'/about'
    },
  ]


  

  return (
    <nav className='flex flex-row justify-center   items-center bg-transparent fixed  w-full h-[95px] '>
      <div className='flex justify-between w-full h-[55px] pt-5 pb-5 p-5 items-center'>
           {/* logo */}
        <h1 className='font-semibold text-[1.75rem] leading-[2.39rem] font-manrope capitalize '>logo</h1>

         {/* navbar menu */}
        <div className='menu'>
            
           <ul className='hidden md:flex flex-row justify-center items-center gap-4 '>
            
           
             
          
             {links.map(({id,name,route}) => (
              <NavLink key={id} to ={route} className='capitalize font-manrope font-semibold text-sm lg:text-base pt-4 pb-4 pl-5 pr-5 '  >
               {name}
              </NavLink>
             ))}
             
            </ul>

           
          </div>

          <div className='hidden lg:flex  text-[16px] gap-4 items-center justify-center '>

        
            <p className='font-semibold text-lg font-manrope capitalize text-semiBlack'>sign up</p>
            <Button name='log in'/>
           
        

          </div>

           {/* burger menu */}

           <div onClick={()=>{setShowNav(!showNav)}} className='z-10 md:hidden' >
           {showNav ? <FaTimes className=" text-semiBlack" size={35}/> : <FaBars size={35}/>} 
          </div>
            {showNav && (
              
                    
                    <ul className=' flex flex-col  justify-center w-full h-fit transition-all ease-linear  items-center absolute bg-slate top-0 right-0 bottom-0  duration-700'>
        
             
        {links.map(({id,name,route}) => (
              <NavLink to={route} key={id} className='capitalize font-manrope font-semibold  text-semiBlack text-base pt-4 pb-4 pl-5 pr-5  hover:scale-105 duration-200 '>
              {name}
            </NavLink>
          ))}
        <div className='flex flex-row justify-center items-center gap-4 '>
        <p className='font-semibold text-lg font-manrope capitalize text-semiBlack'>sign up</p>
         <Button name='log in' />

        </div>
                
        </ul>
        
              
              


                
            )}
         





          
        
      </div>
        
      
    </nav>
  )
}

export default Navbar






