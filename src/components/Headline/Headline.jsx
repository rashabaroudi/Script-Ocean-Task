import React from 'react'
import Button from '../Button/Button'

const Headline = ({title, paragraph,style}) => {
  return (
    <div className='flex flex-col justify-center max-w-fit p-2 gap-y-[24px]'>
        <div className={"flex flex-col gap-y-[24px]" + " " +style}>
            <h1 className=' text-4xl  md:text-[3.15rem]  font-bold leading-[68px] font-manrope text-semiBlack'>{title}</h1>
            <p className='max-w-screen-sm text-base text-semiBlack font-manrope font-[500] '>{paragraph}</p>
        </div>
      
      
    </div>
  )
}

export default Headline
