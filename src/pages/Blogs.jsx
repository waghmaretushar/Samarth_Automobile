import React from 'react'
import FooterSection from '../components/Footer/FooterSection'

const Blogs = () => {
  return (
    <div>
      <div className='lg:p-10 p-5 h-full w-full'>
        <div className='pt-[30vh]'>
          <h2 className='font-[font2] lg:text-[8vw] text-7xl uppercase'>blog</h2>
        </div>
        <div className='w-full h-[40vw] lg:gap-10 lg:mt-0 mt-80 flex flex-col lg:flex-row items-center justify-center'>
          <div className='lg:h-[70%] lg:w-1/2'>
            <img src="/src/assets/blogs/bike care.avif" alt="" className='h-full w-full lg:hover:opacity-90 cursor-pointer object-cover lg:rounded-4xl rounded-2xl overflow-hidden' />
          </div>
          <div className='lg:h-[80%] lg:w-1/2 font-[font2] flex flex-col items-center lg:gap-3 mt-12'>
            <div className='lg:text-2xl flex font-bold lg:whitespace-nowrap'>
              <h2>Signs Your Two-Wheeler Needs Immediate Servicing</h2>
            </div>
            <div className='p-2 mt-2'>
              <p>Your two-wheeler might look fine on the outside, but a few hidden signs can tell you it needs a service right away. If you hear unusual noises, face hard clutch movement, see oil leakage, or feel poor braking — it’s time for a check-up. Ignoring these early warnings can lead to bigger issues and higher repair costs later.</p>
            </div>
            <div className='lg:text-2xl font-bold p-2'>
              <h3>Tip: Check engine oil every 1,000 km and always use genuine spare parts.</h3>
            </div>
            <div className='p-2 mt-8'>
              <h4>Call-to-Action:<br />
                Visit Samarth Automobile Service today for a quick inspection and smooth performance.</h4>
            </div>
          </div>
        </div>


        <div className='w-full h-[40vw] lg:gap-10 lg:mt-0 mt-[160vw] flex flex-col lg:flex-row items-center justify-center'>
          <div className='lg:h-[80%] lg:w-1/2 font-[font2] flex flex-col items-center gap-3 mt-12'>
            <div className='lg:text-2xl font-bold flex lg:whitespace-nowrap'>
              <h2>Inside Our Workshop – How We Care for Your Two-Wheeler</h2>
            </div>
            <div className='p-2 mt-2'>
              <p>At Samarth Automobile Service, your bike gets complete care — from initial inspection to test ride. Our skilled mechanics use professional tools and certified oils to ensure your ride is safe and efficient. We provide transparent service reports, genuine parts, and same-day delivery for most models.</p>
            </div>
            <div className='lg:text-2xl font-bold p-2'>
              <h3>Tip: Regular servicing every 3 months keeps your bike’s mileage and life in top condition.</h3>
            </div>
            <div className='p-2 mt-8'>
              <h4>Call-to-Action:<br />
                Book your bike service now and experience expert care from professionals who love machines as much as you do.</h4>
            </div>
          </div>
          <div className='lg:h-[70%] lg:w-1/2'>
            <img src="/src/assets/blogs/service.webp" alt="" className='h-full w-full lg:hover:opacity-90 cursor-pointer object-cover lg:rounded-4xl rounded-2xl overflow-hidden' />
          </div>
        </div>


        <div className='w-full h-[40vw] lg:gap-10 lg:mt-0 mt-[160vw] flex flex-col lg:flex-row items-center justify-center'>
          <div className='lg:h-[70%] lg:w-1/2'>
            <img src="/src/assets/blogs/monsoonrs.avif" alt="" className='h-full w-full lg:hover:opacity-90 cursor-pointer object-cover lg:rounded-4xl rounded-2xl overflow-hidden' />
          </div>
          <div className='lg:h-[80%] lg:w-1/2 font-[font2] flex flex-col items-center gap-3 mt-12'>
            <div className='lg:text-2xl font-bold flex lg:whitespace-nowrap'>
              <h2>Monsoon Maintenance Tips for Your Bike</h2>
            </div>
            <div className='p-2 mt-2'>
              <p>Rainy weather is tough on two-wheelers. Water and mud can damage chains, brakes, and electrical parts. Always check tire tread depth before riding, keep your brakes dry, and lubricate the chain regularly. If your bike stands outside, cover it properly to prevent rust.</p>
            </div>
            <div className='lg:text-2xl font-bold p-2'>
              <h3>Tip: After every rainy ride, wipe your bike dry and check your lights and horn.</h3>
            </div>
            <div className='p-2 mt-8'>
              <h4>Call-to-Action:<br />
                Protect your bike this monsoon — visit Samarth Automobile Service for a rainy-season check-up.</h4>
            </div>
          </div>
        </div>


        <div className='w-full h-[40vw] lg:gap-10 lg:mt-0 mt-[140vw] flex flex-col lg:flex-row items-center justify-center'>
          <div className='lg:h-[80%] lg:w-1/2 font-[font2] flex flex-col items-center gap-3 mt-12'>
            <div className='lg:text-2xl font-bold flex lg:whitespace-nowrap'>
              <h2>Why Regular Servicing Saves You Money</h2>
            </div>
            <div className='p-2 mt-2'>
              <p>Skipping regular servicing might seem like saving money — but in reality, it costs more in the long run. Timely oil changes improve engine health and mileage, while periodic checks prevent expensive breakdowns. A well-maintained two-wheeler also gives better resale value.</p>
            </div>
            <div className='lg:text-2xl font-bold p-2'>
              <h3>Tip: Service your bike every 2,500–3,000 km for best results.</h3>
            </div>
            <div className='p-2 mt-8'>
              <h4>Call-to-Action:<br />
                Save money and ride confidently — get your routine check-up done at Samarth Automobile Service today.</h4>
            </div>
          </div>
          <div className='lg:h-[70%] lg:w-1/2'>
            <img src="/src/assets/blogs/savemoney.webp" alt="" className='h-full w-full lg:hover:opacity-90 cursor-pointer object-cover lg:rounded-4xl rounded-2xl overflow-hidden' />
          </div>
        </div>


        <div className='w-full mb-96 lg:mb-0 h-[40vw] lg:gap-10 lg:mt-0 mt-[160vw] flex flex-col lg:flex-row items-center justify-center'>
          <div className='lg:h-[70%] lg:w-1/2 mb-16'>
            <img src="/src/assets/blogs/booking.webp" alt="" className='h-full w-full lg:hover:opacity-90 cursor-pointer object-cover lg:rounded-4xl rounded-2xl overflow-hidden' />
          </div>
          <div className='lg:h-[80%] lg:w-1/2 font-[font2] flex flex-col items-center gap-3 mt-12'>
            <div className='lg:text-2xl font-bold flex lg:whitespace-nowrap'>
              <h2>Book Your Two-Wheeler Service Online – Quick & Easy</h2>
            </div>
            <div className='p-2 mt-2'>
              <p>No need to stand in queues anymore! With Samarth Automobile Service, you can book your bike’s servicing online in just one minute. Choose your preferred time slot, get confirmation instantly, and relax while we take care of everything.</p>
            </div>
            <div className='lg:text-2xl font-bold p-2'>
              <h3>Tip: “We also provide doorstep pick-up and delivery — your convenience is our priority.”</h3>
            </div>
            <div className='p-2 mt-8'>
              <h4>Call-to-Action:<br />
                “Contact Us Now” and enjoy hassle-free servicing with trusted professionals.</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  )
}

export default Blogs