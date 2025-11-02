import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link, Links } from 'react-router-dom'

const FullScreenNav = () => {

    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.5,
            height: '100%',
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }

    function gsapAnimationRverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })

        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none'
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationRverse()
        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white h-screen w-full overflow-hidden absolute z-50'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing border-x-4 border-black h-full w-1/5 bg-black'></div>
                    <div className='stairing border-x-4 border-black h-full w-1/5 bg-black'></div>
                    <div className='stairing border-x-4 border-black h-full w-1/5 bg-black'></div>
                    <div className='stairing border-x-4 border-black h-full w-1/5 bg-black'></div>
                    <div className='stairing border-x-4 border-black h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className='navlink flex w-full justify-between items-start p-3 z-4'>
                    <div className='logo w-20 lg:w-20 h-20 lg:h-20 '>
                        <img className='h-full w-full rounded-full overflow-hidden object-cover' src='/logo.png' alt='' />
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-25 lg:w-25 h-10 w-10 cursor-pointer relative'>
                        <div className='lg:h-32 h-13 w-1 lg:w-2 absolute -rotate-45 origin-top bg-[#d3fd50]'></div>
                        <div className='lg:h-32 h-13 w-1 lg:w-2 absolute right-0 rotate-45 origin-top bg-[#d3fd50]'></div>
                    </div>
                </div>
                <div className='py-10 lg:py-3'>
                    <Link to='/store' onClick={() => {
                        setNavOpen(false)
                    }} className=''>
                        <div className='link origin-top relative border-white border-t-2'>
                            <h1 className='font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>Store</h1>
                            <div className='moveLink absolute cursor-pointer text-black bg-[#d3fd50]  flex top-0'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>See Our Shop</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/images (5).jpg' alt='' />
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>See Our Shop</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/images (1).jpg' alt='' />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>See Our Shop</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/images (5).jpg' alt='' />
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>See Our Shop</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/images (1).jpg' alt='' />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/services' onClick={() => {
                        setNavOpen(false)
                    }} className=''>
                        <div className='link origin-top relative border-t-2 border-white'>
                            <h1 className='font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>services</h1>
                            <div className='moveLink absolute cursor-pointer text-black bg-[#d3fd50]  flex top-0'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>bike care</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/images (3).jpg' alt='' />
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>bike care</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/images (6).jpg' alt='' />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>bike care</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/images (3).jpg' alt='' />
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>bike care</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/images (6).jpg' alt='' />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/blogs' onClick={() => {
                        setNavOpen(false)
                    }} className=''>
                        <div className='link origin-top relative border-t-2 border-white'>
                            <h1 className='font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>blog</h1>
                            <div className='moveLink absolute cursor-pointer text-black bg-[#d3fd50]  flex top-0'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>read articles</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/mechanic1.jpg' alt='' />
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>read articles</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/mechanic2.jpg' alt='' />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>read articles</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/mechanic1.jpg' alt='' />
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>read articles</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/mechanic2.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/contact' onClick={() => {
                        setNavOpen(false)
                    }} className=''>
                        <div className='link origin-top relative border-t-2 border-b-2 border-white'>
                            <h1 className='font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>contact</h1>
                            <div className='moveLink absolute cursor-pointer text-black bg-[#d3fd50]  flex top-0'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>send us mail</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/contactus.jpg' alt='' />
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>send us mail</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/mailicon.jpg' alt='' />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>send us mail</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/contactus.jpg' alt='' />
                                    <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[5vw] text-[15vw] uppercase'>send us mail</h2>
                                    <img className='lg:h-15 h-12 mb-2 rounded-full shrink-0 lg:w-40 w-24 object-cover' src='/src/assets/fullnavbar/mailicon.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav