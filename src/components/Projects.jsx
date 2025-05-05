import React from 'react'
import galleryCone from '../assets/images/desktop/image-gallery-cone.jpg'
import galleryMilk from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import galleryOrange from '../assets/images/desktop/image-gallery-orange.jpg'
import gallerySugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

const Projects = () => {
  return (
    <div className='flex flex-wrap'>
        <div className='w-1/2 lg:w-1/4'><img src={galleryMilk} alt="" /></div>
        <div className='w-1/2 lg:w-1/4'><img src={galleryOrange} alt="" /></div>
        <div className='w-1/2 lg:w-1/4'><img src={galleryCone} alt="" /></div>
        <div className='w-1/2 lg:w-1/4'><img src={gallerySugar} alt="" /></div>
    </div>
  )
}

export default Projects