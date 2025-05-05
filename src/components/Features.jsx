import React from 'react'
import transform from '../assets/images/desktop/image-transform.jpg'
import standOut from '../assets/images/desktop/image-stand-out.jpg'
import graphicDesign from '../assets/images/desktop/image-graphic-design.jpg'
import photography from '../assets/images/desktop/image-photography.jpg'

const Features = () => {
  return (
    <div className='flex flex-wrap text-black'>
        <div className='flex flex-wrap-reverse'>
          <div className='lg:w-1/2 flex flex-col p-20 space-y-5'>
              <h1 className='text-5xl font-semibold font-fraunces '>Transform your brand</h1>
              <p className='text-neutral-600'>We are a full-service creative agency specializing in helping brands grow fast.
                   Engage your clients through compelling visuals that do most of the marketing for you.
              </p>
              <a href="#" className='font-semibold font-fraunces tracking-wider max-w-max relative px-3'>
                  <span className='absolute left-0 bottom-1 h-2 w-full bg-yellow-100 rounded-full'></span>
                  <span className='relative z-20'>Learn more</span>
              </a>
          </div>
          <div className='lg:w-1/2'>
          <img src={transform} alt="transform image" /></div>
        </div>
        <div className='flex flex-wrap'>
          <div className='lg:w-1/2'>
          <img src={standOut} alt="Stand out image" />
          </div>
          <div className='lg:w-1/2 flex flex-col p-20 space-y-5'>
            <h1 className='text-5xl font-semibold font-fraunces'>Stand out to the right audience</h1>
            <p className='text-neutral-600'>Using a collaborative formula of designers, resarchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
            <a href="#" className='font-semibold font-fraunces tracking-wider max-w-max relative px-3'>
              <span className='absolute left-0 bottom-1 h-2 w-full bg-red-100 rounded-full'></span>
              <span className='relative z-20'>learn more</span>
            </a>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='lg:w-1/2 relative flex flex-col items-center'>
           <img src={graphicDesign} alt="" className='w-full' />
           <div className='flex flex-col items-center space-y-5 absolute bottom-10 w-90'>
            <h1 className='text-xl font-normal font-fraunces text-green-800 tracking-wide'>Graphic Design</h1>
            <p className='text-green-800 text-center'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
           </div>
          </div>
          <div className='lg:w-1/2 relative flex flex-col items-center'>
           <img src={photography} alt="" className='w-full' />
           <div className='flex flex-col items-center space-y-5 absolute bottom-10 w-90'>
            <h1 className='text-xl font-normal font-fraunces text-blue-800 tracking-wide'>Photography</h1>
            <p className='text-blue-800 text-center'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
           </div>
          </div>
        </div>
        
    </div>
  )
}

export default Features