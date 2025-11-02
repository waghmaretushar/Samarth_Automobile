import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const InfoSection = () => {

    gsap.registerPlugin(ScrollTrigger)

    const boxRef = useRef(null)
    useEffect(() => {
        const el = boxRef.current

        gsap.fromTo(
            el,
            { backgroundColor: '#ffffff' },
            {
                backgroundColor: '#000000',
                stagger: {
                    amount: 1,
                },
                scrollTrigger: {
                    trigger: el,
                    start: 'top 100%',
                    end: 'bottom 150%',
                    scrub: true,
                    toggleActions: 'play reverse play reverse'
                }
            }
        )
    })

    const nameRef = useRef(null)

    useEffect(()=>{
        const tl = nameRef.current
        
        gsap.to(
            tl,
            {
                x: '100%',
                duration: 5,
                repeat: -1,
                ease: 'none',
                yoyo: false
            }
        )
    })

    const lastnameRef = useRef(null)

    useEffect(()=>{
        const fl = lastnameRef.current
        
        gsap.to(
            fl,
            {
                x: '-100%',
                duration: 5,
                repeat: -1,
            }
        )
    })


    return (
        <div className='h-screen w-screen relative'>
                <div ref={boxRef} className='w-full h-full duration-200 flex flex-col relative'>
                <div ref={nameRef} className='h-1/2 w-screen flex items-center justify-start'>
                    <h2 className='name font-[font1] lg:text-[6vw] text-[8vw] text-[#d3fd50] uppercase'>parth</h2>
                </div>
                <div className=' absolute h-full w-full flex items-center justify-center'>
                    <img className='lg:h-[40vw] lg:w-[30vw] h-[100vw] w-[60vw] rounded-2xl absolute overflow-hidden object-cover' src='/src/assets/services/parth.jpg' alt='' />
                </div>
                 <div ref={lastnameRef} className='h-1/2 w-screen flex gap-2 lg:gap-15 items-center justify-end'>
                    <h2 className='name font-[font1] lg:text-[6vw] text-[8vw] text-[#d3fd50] uppercase'>waghmare</h2>
                    <p className='text-white lg:text-3xl pt-2 lg:pt-7'> FOUNDER</p>
                </div>
            </div>
        </div>
    )
}

export default InfoSection