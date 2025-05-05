import React from 'react'
import { footerItems } from '../constants'
import { contacts } from '../constants'

const Footer = () => {
  return (
    <div className='bg-emerald-300 flex flex-col items-center pt-10 grayscale-50'>
        <h1 className='text-teal-700 font-extrabold text-lg'>sunnyside</h1>
        <div className='flex justify-between w-70'>
            {footerItems.map((item, index)=>(
                <a href={item.href} key={index} className='text-teal-700 text-xs mt-10'>{item.label}</a>
            ))}
        </div>
        <div className='flex justify-between w-35 my-12'>
            {contacts.map((icon, index)=>(
                <a href="#"><img src={icon.src} alt={icon.alt} className='w-4 h-4'/></a>
            ))}
        </div>
    </div>
  )
}

export default Footer