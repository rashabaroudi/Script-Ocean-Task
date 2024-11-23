import React from 'react'
import Headline from '../Headline/Headline'
import Button from '../Button/Button'
//motion
import {motion} from 'framer-motion'

//variants
 import { fadeIn } from '../../variants' 

const WithEaseSection = () => {
  return (
    <div className=' flex flex-col justify-center items-center bg-[#D9DADC] w-full min-h-[486px] '>
      <div className='w-[80%] p-4 min-h-[screen]  grid  grid-cols-1  sm:grid-cols-2 items-center '>
            <motion.img src='src/assets/images/ease.png'
            variants={fadeIn("left",0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0.7}}
            />
            <motion.div className='flex flex-col justify-center items-center gap-6  '
            variants={fadeIn("right",0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0.7}}
            >
                <Headline title='Customize with Ease' paragraph='Tailor your website to fit your brand with our intuitive drag-and-drop interface. Make changes in real-time with a few simple clicks'/>
                <Button name='create one'/>
            </motion.div>
            
      </div>
    </div>
  )
}

export default WithEaseSection
