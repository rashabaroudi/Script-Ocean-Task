import React from 'react'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const list=[
        {   id:1,
            title:'Quick links',
            list:[
                'Home',
                'theme',
                'extensions',
                'pricing',
                'Home',
        ],
    },
        {   id:2,
            title:'about',
            list:[
                'careers',
                'investor relations ',
                'our brand',
                'our history',
                'accessibility',
                'press and media',
        ],
    },
        {   id:3,
            title:'support and resources ',
            list:[
                'FAQ',
                'documentation ',
                'blog',
                'tutorials',
               
        ],
    },
        {   id:4,
            title:'contact information',
            list:[
                'Email:info@example.com',
                'Phone: +1 (123) 456-7890',
                'Address: 123 Main Street,Anytown, USA',
                
        ],
    },
        {   id:5,
            title:'social media links',
            list:[
                'Email:info@example.com',
                'Phone: +1 (123) 456-7890',
                'Address: 123 Main Street,Anytown, USA',
                
        ],
    },

        
    ]
  return (
    <div className='  grid grid-cols-1  gap-10  w-full min-h-[551px] bg-semiBlack  pt-[57px] pl-[150px] pr-[147px] '>
      <div className='flex flex-col md:flex-row gap-y-8 justify-between items-center w-full  '>
        <h1 className='text-slate font-semibold font-manrope text-xl md:text-4xl'> Ready to Take your next step?</h1>
        <Button name='start free trial'/>
      </div>


      <hr className='w-full text-slate text-center mx-auto border-[1px] pr-[147px]'/>

      <div className='w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[54px]  text-slate'>
        {list.map(({id,title,list})=>(
            <div key={id} className='flex flex-col space-y-4 w-full pr-[119px] pb-[64px]'>
                <p className='text-nowrap font-manrope font-normal text-slate text-[1.15rem] leading-[24.6px] capitalize'>{title}</p>
                
                <ul className='list-disc cursor-pointer space-y-2 pl-6 capitalize  '>
                    {list.map((item)=>(
                              <li className='text-base font-manrope font-normal'>{item}</li> 
                    ))}
             
                
                </ul>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Footer
