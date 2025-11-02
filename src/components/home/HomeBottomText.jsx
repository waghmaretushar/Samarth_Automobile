import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex  items-center justify-center gap-5 text-white'>
      <p className='absolute w-70 lg:w-70 right-2 lg:right-10 bottom-35 font-[font1] leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Samarth Automobiles Services, we ensure your two-wheeler runs like new with expert maintenance, quality parts, and trusted technicians. From regular servicing to complete engine care, we deliver reliable, fast, and affordable solutions to keep your ride smooth and safe on every journey.</p>
        <div className='border-3 hover:border-[#D3FD50] hover:text-[#d3fd50] lg:h-22 flex items-center lg:px-6 px-4 border-white rounded-full uppercase'>
            <Link className='lg:text-[5vw] text-[8vw]' to='/store'>Store</Link>
        </div>
        <div className='border-3 hover:border-[#D3FD50] hover:text-[#d3fd50] lg:h-22 flex items-center lg:px-6 px-4 border-white rounded-full uppercase'>
            <Link className='lg:text-[5vw] text-[8vw]' to='/services'>Services</Link>
        </div>
    </div>
  )
}

export default HomeBottomText