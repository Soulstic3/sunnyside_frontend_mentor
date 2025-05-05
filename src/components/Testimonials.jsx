import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center my-20'>
        <h1 className='text-neutral-400 font-semibold font-fraunces tracking-widest'>CLIENT TESTIMONIALS</h1>
        <div className='flex flex-wrap justify-around  space-x-3'>
        {testimonials.map((testimonial, index) =>(
            <div key={index} className='flex flex-col items-center max-w-70 space-y-10 mt-15'>
                <img src={testimonial.image} alt="profile img" className='h-15 w-15 rounded-full' />
                <p className='text-center text-black text-sm'>{testimonial.text}</p>
                <div>
                    <p className='text-center text-black font-bold font-fraunces'>{testimonial.user}</p>
                    <p className='text-neutral-300 font-semibold text-xs'>{testimonial.cargo}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Testimonials