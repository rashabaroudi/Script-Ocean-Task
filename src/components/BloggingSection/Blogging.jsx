import React from 'react'
import Headline from '../Headline/Headline'
//motion
import {motion} from 'framer-motion'

//variants
 import { fadeIn } from '../../variants'

const Blogging = () => {
  return (
    <div className='w-full min-h-[897px] flex flex-col justify-center items-center gap-8'>
       <motion.div
       variants={fadeIn("down",0.3)}
       initial="hidden"
       whileInView="show"
       viewport={{once:false,amount:0.7}}
       >
        <Headline title='Advanced Blogging Tools' style='text-center'/>
       </motion.div>
        <div className='w-[86.45%] flex flex-col lg:flex-row justify-center items-center gap-[58px]'>
            <motion.div className='flex flex-col justify-center gap-10'
            variants={fadeIn("right",0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0.7}}
            >
                <Headline title='AI Content Editor' paragraph='Write and edit your blog posts with ease using our AI-powered content editor. Enjoy smart suggestions and real-time feedback.'/>
                <Headline title='AI Content Editor' paragraph='Write and edit your blog posts with ease using our AI-powered content editor. Enjoy smart suggestions and real-time feedback.'/>
                <Headline title='AI Content Editor' paragraph='Write and edit your blog posts with ease using our AI-powered content editor. Enjoy smart suggestions and real-time feedback.'/>

            </motion.div>
            <motion.img src='/src/assets/images/blogging.png' width='58.23%'
            variants={fadeIn("left",0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0.7}}
            />
        </div>
      
    </div>
  )
}

export default Blogging
