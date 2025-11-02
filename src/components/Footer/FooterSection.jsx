import React from 'react'
import { Link } from 'react-router-dom'

const FooterSection = () => {
  return (
    <div>
      <div className='lg:h-[30vw] h-[80vw] bg-black text-white border-t bottom-0 lg:p-5'>
        <div className='flex lg:justify-between justify-center uppercase font-[font2] gap-2 mt-3 lg:text-5xl'>
          <div className='flex lg:gap-3 gap-2'>
            <Link><h2 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#d3fd50] lg:px-4 px-2 lg:pt-2 rounded-full'>privacy</h2></Link>
            <Link><h2 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#d3fd50] lg:px-4 px-2 lg:pt-2 rounded-full'>terms</h2></Link>
          </div>
          <div className='flex lg:gap-3 gap-2'>
            <Link to='/contact'><h2 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#d3fd50] lg:px-4 px-2 lg:pt-2 rounded-full'>contact</h2></Link>
            <Link to='/blogs'><h2 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#d3fd50] lg:px-4 px-2 lg:pt-2 rounded-full'>blog</h2></Link>
          </div>
        </div>
        <div className='text-white lg:text-4xl text-3xl gap-3 lg:mt-[7vw] mt-[15vw] overflow-hidden font-[font2] flex flex-col items-center justify-center'>
          <div>
            <h4 >FOLLOW US</h4>
          </div>
          <div className='flex gap-2 cursor-pointer'>
            <a href='https://www.instagram.com/samarth_automobiles_service?igsh=MWFicmEzdnpmc3BwMg%3D%3D&utm_source=qr' className='border-2 hover:border-[#D3FD50] hover:text-[#d3fd50] rounded-full px-3'>IG</a>
            <a className='border-2 hover:border-[#D3FD50] hover:text-[#d3fd50] rounded-full px-3'>FB</a>
            <a className='border-2 hover:border-[#D3FD50] hover:text-[#d3fd50] rounded-full px-3'>WA</a>
            <a href='https://youtube.com/@smautomobile27?si=SudO-f3JbcqsBd6n' className='border-2 hover:border-[#D3FD50] hover:text-[#d3fd50] rounded-full px-3'>YT</a>
          </div>
        </div>
        <div className='flex items-center justify-center mt-20 whitespace-nowrap text-sm'>
          <p>© 2025 Samarth Automobile Service. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default FooterSection