import React from 'react'
import Headline from '../Headline/Headline'
import Button from '../Button/Button'
//motion
import {motion} from 'framer-motion'

//variants
 import { fadeIn } from '../../variants'

const CreativePortfolio = () => {
  return (
    <div className='w-full bg-[#D8DADD] min-h-[900px]   ' >
        <motion.div className='relative flex flex-col md:flex-row  md:gap-9 justify-center items-center   m-auto    '
         variants={fadeIn("right",0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{once:false,amount:0.7}}
        >
            <img src='/src/assets/images/creative1.png' width='29.7%'/>
            <img src='/src/assets/images/creative2.png' width='24.79%'  className='absolute translate-y-[-230px] translate-x-[50px] sm:translate-x-[-205px] sm:translate-y-[110px] z-10'/>
          
            <motion.div className=' flex  flex-col justify-center gap-12 p-4 w-[38.95%] '
               variants={fadeIn("left",0.3)}
               initial="hidden"
               whileInView="show"
               viewport={{once:false,amount:0.7}}
            >
                <Headline title='Creative Portfolio' paragraph='Showcase your creativity with this stylish portfolio theme. Ideal for artists, designers, and photographers.'/>
                <Button name='Create My Portifiolio'/>
            </motion.div>
            
        </motion.div>
      
    </div>
  )
}

export default CreativePortfolio
