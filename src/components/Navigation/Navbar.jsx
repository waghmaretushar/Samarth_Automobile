import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    return (
        <div className='z-4 flex fixed top-0 w-full items-start justify-between'>
            <div className='logo w-20 lg:w-20 h-20 m-2  lg:h-20'>
                <img className='h-full w-full rounded-full overflow-hidden object-cover' src='/logo.png' alt='' />
            </div>
            <div onClick={()=>{
                setNavOpen(true)
            }} onMouseEnter={()=>{
                navGreenRef.current.style.height = '100%' 
            }}
            onMouseLeave={()=>{
                navGreenRef.current.style.height = '0%'
            }}
            className='h-10 lg:h-15 rounded-bl-full bg-black cursor-pointer relative w-50 lg:w-80'>
                <div ref={navGreenRef} className='bg-[#d3fd50] transition-all rounded-bl-full absolute top-0 h-0 w-full'></div>
                <div className='relative h-full px-12 lg:px-8 flex flex-col justify-center items-end gap-2'>
                    <div className='w-32 h-0.5 bg-white'></div>
                    <div className='w-20 h-0.5 bg-white'></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar