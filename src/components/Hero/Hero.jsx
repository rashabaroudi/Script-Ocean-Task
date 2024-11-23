import React from 'react'
import Headline from '../Headline/Headline'
import Button from '../Button/Button'
//motion
import {motion} from 'framer-motion'

//variants
 import { fadeIn } from '../../variants'

const Hero = () => {
  return ( 
    <div className='min-h-[728px] w-full  bg-cover bg-[url(./assets/images/hero.png)] bg-no-repeat '>
     <div className='flex flex-col sm:flex-row justify-center gap-[67px]   m-auto mt-[100px] items-center w-[77.84%] pt-6 pb-6 '>
      
      <motion.div className='flex flex-col gap-[46px] md:gap-[86px] '
      variants={fadeIn("right",0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0.7}}
      >
        <Headline title='The Leader In Website World '/> 
        <Button name='get started'/>
      </motion.div>
       
       <div className='bg-slate p-5 flex flex-col items-center gap-[20px] md:flex-row justify-center '>
          <motion.img className='relative m-auto ' width='62%' src='src/assets/images/girl.png'
           variants={fadeIn("left",0.3)}
           initial="hidden"
           whileInView="show"
           viewport={{once:false,amount:0.7}}
          />
          <div className='flex flex-col justify-center items-center h-[265px] text-center gap-[36px]'>
            <h1 className='font-manuale text-semiBlack font-normal text-[38px] md:text-[33px] lg:text-[48.3px] leading-[50px] capitalize text-center'>start your next journey</h1>
            <p className='font-manuale text-white bg-semiBlack pt-2 pb-2 pl-3 pr-3 m-auto rounded-full text-sm'>get started</p>
          </div>
          
       </div>
     </div>
    </div>
  )
}

export default Hero
