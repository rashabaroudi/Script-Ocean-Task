import React from 'react'
import Headline from '../Headline/Headline'
import Button from '../Button/Button'

const PortfolioSection = () => {
  return (
    <div className='bg-[#69A5A4] w-full min-h-[941px] '>
        <div className='w-[56.66%]  flex flex-col justify-center items-center gap-8 h-[840px] m-auto'>
            <Headline title='Seamless Across All Devices' paragraph='Ensure your website looks amazing on any device. Our AI optimizes layouts to be fully responsive and mobile-friendly.' style='text-center'/>
            <Button name='Create Responsive Design '/>
            <img src='/src/assets/images/portfolio.png'/>
        </div>

    
    </div>
  )
}

export default PortfolioSection
