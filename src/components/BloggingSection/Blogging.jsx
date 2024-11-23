import React from 'react'
import Headline from '../Headline/Headline'

const Blogging = () => {
  return (
    <div className='w-full min-h-[897px] flex flex-col justify-center items-center gap-8'>
        <Headline title='Advanced Blogging Tools' style='text-center'/>
        <div className='w-[86.45%] flex flex-col lg:flex-row justify-center items-center gap-[58px]'>
            <div className='flex flex-col justify-center gap-10'>
                <Headline title='AI Content Editor' paragraph='Write and edit your blog posts with ease using our AI-powered content editor. Enjoy smart suggestions and real-time feedback.'/>
                <Headline title='AI Content Editor' paragraph='Write and edit your blog posts with ease using our AI-powered content editor. Enjoy smart suggestions and real-time feedback.'/>
                <Headline title='AI Content Editor' paragraph='Write and edit your blog posts with ease using our AI-powered content editor. Enjoy smart suggestions and real-time feedback.'/>

            </div>
            <img src='/src/assets/images/blogging.png' width='58.23%' />
        </div>
      
    </div>
  )
}

export default Blogging
