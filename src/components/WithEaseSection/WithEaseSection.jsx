import React from 'react'
import Headline from '../Headline/Headline'
import Button from '../Button/Button'

const WithEaseSection = () => {
  return (
    <div className=' flex flex-col justify-center items-center bg-[#D9DADC] w-full min-h-[486px] '>
      <div className='w-[80%] p-4 min-h-[screen]  grid  grid-cols-1  sm:grid-cols-2 items-center '>
            <img src='src/assets/images/ease.png'/>
            <div className='flex flex-col justify-center items-center gap-6  '>
                <Headline title='Customize with Ease' paragraph='Tailor your website to fit your brand with our intuitive drag-and-drop interface. Make changes in real-time with a few simple clicks'/>
                <Button name='create one'/>
            </div>
            
      </div>
    </div>
  )
}

export default WithEaseSection
