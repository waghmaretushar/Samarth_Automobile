import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from 'react'
import Expertis from '../components/services/expertis';
import InfoSection from '../components/services/InfoSection';
import FooterSection from '../components/Footer/FooterSection';

const Services = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    '/src/assets/image2.jpg',
    '/src/assets/image3.jpg',
    '/src/assets/image4.jpg',
    '/src/assets/image5.jpg',
    '/src/assets/image6.jpg',
    '/src/assets/image7.jpg',
    '/src/assets/image8.jpg',
    '/src/assets/image1.jpg',
    '/src/assets/image9.jpg'
  ]


  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top -20%',
        end: 'top -100%',
        pin: true,
        pinType: 'transform',
        scrub: true,
        
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className='parent'>
      <div id='page1' className='py-1 lg:h-screen h-[30vw]'>
        <div ref={imageDivRef} className='absolute overflow-hidden h-[40vw] lg:h-[20vw] w-[30vw] lg:w-[15vw] rounded-2xl lg:rounded-3xl lg:top-50 top-0 lg:left-[35vw] left-[25vw]'>
          <img ref={imageRef} className='h-full w-full object-cover' src='/src/assets/image3.jpg' alt='' />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[13vw] text-center uppercase leading-[12vw]'>automobile<br />
              service</h1>
          </div>
          <div className='lg:pl-[40%] pl-4 lg:mt-15 mt-12'>
            <p className='lg:text-2xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We specialize in providing top-quality servicing and repair solutions for all types of two-wheelers — from scooters to high-performance bikes. Our skilled technicians ensure your ride stays smooth, safe, and fuel-efficient with advanced diagnostics, genuine spare parts, and precise maintenance. Whether it’s a regular check-up, engine tuning, oil change, or accidental repair, we deliver quick, reliable, and affordable service to keep you worry-free on the road. Experience the perfect blend of trust, technology, and transparency — because your bike deserves the best care.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen mt-[140vw] lg:mt-[50vw] '>
        <Expertis />
      </div>
      <div className='h-screen w-screen mt-2'>
        <InfoSection />
      </div>
      <div className=''>
        <FooterSection />
      </div>
    </div>
  )
}

export default Services