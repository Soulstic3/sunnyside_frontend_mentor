import React from 'react'
import arrowDown from '../assets/images/icon-arrow-down.svg'
import imageHeader from '../assets/images/desktop/image-header.jpg'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center space-y-20 ms:space-y-5 relative min-h-[500px]'>
        <img src={imageHeader} alt="" className='absolute object-cover w-full h-full' />
        <h1 className='font-fraunces uppercase text-5xl pt-20 ms:pt-10! tracking-widest font-black z-2 text-center'>We are creatives</h1>
        <img src={arrowDown} alt="arrow" className='z-2' />
    </div>
  )
}

export default HeroSection