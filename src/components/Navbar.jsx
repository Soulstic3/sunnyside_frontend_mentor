import React, {useState} from 'react'
import logoIcon from '../assets/images/logo.svg'
import {navItems} from '../constants'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleMenu = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className='sticky top-0 py-8 px-7 z-40 backdrop-blur-lg bg-sky-400'>
        <div className='flex justify-between items-center text-sm'>
            <div className='flex-shrink-0'>
                <img src={logoIcon} alt="logo"/>
            </div>
            <ul className='hidden lg:flex ml-14 space-x-14'>
                {navItems.map((item, index) => (
                    <li key={index} className='font-semibold'>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
                <li>
                    <a href="#contats" className='bg-white px-6 py-2 rounded-full text-black  font-fraunces uppercase'>Contact</a>
                </li>
            </ul>
            <div className='lg:hidden md:flex flex-col justify-end cursor-pointer'>
                <img src={hamburgerIcon} alt="menu" onClick={toggleMenu}/>
            </div>
        </div>
        {mobileDrawerOpen &&(
            <div className='fixed right-8 z-20 p-12 flex flex-col items-center lg:hidden text-slate-400 bg-white'>
                <ul className='space-y-6'>
                {navItems.map((item, index) => (
                    <li key={index} className='font-semibold flex flex-col items-center'>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
                <li>
                    <a href="#contats" className='bg-yellow-300 px-6 py-2 rounded-full text-black  font-fraunces uppercase'>Contact</a>
                </li>
            </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar