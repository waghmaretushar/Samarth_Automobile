import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font2] mt-25 lg:mt-0 pt-14 text-center text-white'>
            <div className='lg:text-[7vw] text-[12vw]  justify-center flex items-center uppercase lg:leading-[7vw] leading-[12vw]'>
                the spark for
            </div>
            <div className='lg:text-[7vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[7vw] leading-[12vw]'>
                all
                <div className='h-[6vw] w-[12vw] -mt-3 rounded-full overflow-hidden'>
                    <Video />
                </div>
                things
            </div>
            <div className='lg:text-[7vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[7vw] leading-[12vw]'>
                ride-worthy
            </div>
        </div>
    )
}

export default HomeHeroText