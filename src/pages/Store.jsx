import React from 'react'
import FooterSection from '../components/Footer/FooterSection'
import gsap from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
import Feedback from '../components/store/Feedback';

const Store = () => {
  const products = [
    {
      name: "Engine Oil",
      desc: "High-performance synthetic engine oil for smooth rides and long engine life.",
      img: "https://plus.unsplash.com/premium_photo-1692117162332-2701afb100fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=829",
      price: "₹450",
    },
    {
      name: "Air Filter",
      desc: "Genuine air filter for clean airflow and better mileage.",
      img: "https://media.istockphoto.com/id/1854813777/photo/auto-mechanic-hand-with-new-car-engine-air-filter-car-maintenance-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=5vLlHy16jS86DpfGPoa1zk6Bcgdp-B_BMRy9uiax2Bc=",
      price: "₹220",
    },
    {
      name: "Brake Pads",
      desc: "High-quality brake pads ensuring reliable stopping power.",
      img: "https://media.istockphoto.com/id/2212520874/photo/close-up-view-of-a-motorcycles-front-wheel-assembly-including-brake-disc.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWhdD-N5Yino0eWe-l_2eONgr8pAoEmhhuOtzd2Jw90=",
      price: "₹300",
    },
    {
      name: "Spark Plug",
      desc: "Premium spark plug for consistent ignition and performance.",
      img: "https://media.istockphoto.com/id/172676445/photo/spark-plug.webp?a=1&b=1&s=612x612&w=0&k=20&c=F3KV9sjUsOeV6tGMhcNoOmM-84V8NKo20H_D9Dh_30M=",
      price: "₹150",
    },
    {
      name: "Clutch Plate",
      desc: "Durable clutch plates for smooth gear shifting.",
      img: "https://media.istockphoto.com/id/521976870/photo/motorcycle-clutch-with-gears.webp?a=1&b=1&s=612x612&w=0&k=20&c=l_FCMxLIj1LUCc9YfrBBZIPnePqLzSZjcnljpiSqimc=",
      price: "₹600",
    },
    {
      name: "Chain & Sprocket Kit",
      desc: "Heavy-duty chain set for smoother power delivery.",
      img: "https://media.istockphoto.com/id/2241196687/photo/chain-and-sprocket-3d-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=jyXhwnb5dj3V-iU-t0tOliDcZkj6e6W6P2Pu0JlA_RY=",
      price: "₹950",
    },
    {
      name: "Battery",
      desc: "Reliable two-wheeler battery ensuring quick starts.",
      img: "https://plus.unsplash.com/premium_photo-1681433419747-f5c114430ab5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdGhpdW0lMjBiYXR0ZXJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      price: "₹1,200",
    },
    {
      name: "Headlight Bulb",
      desc: "Bright LED headlight for clear visibility.",
      img: "https://media.istockphoto.com/id/1192386139/photo/motorcycle-headlight.webp?a=1&b=1&s=612x612&w=0&k=20&c=s-gkftIbt4MVHXBQnQ4KVXFxy8m8cOX7175TO3g1EG8=",
      price: "₹250",
    },
    {
      name: "Rearview Mirror",
      desc: "Stylish and durable rearview mirrors for all bike models.",
      img: "https://images.unsplash.com/photo-1603465833928-9b36fca19f5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW90b3JjeWNsZSUyMFJlYXJ2aWV3JTIwTWlycm9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      price: "₹180",
    },
    {
      name: "Leg Guard",
      desc: "Stainless steel leg guard for rider safety and comfort.",
      img: "https://media.istockphoto.com/id/1200741580/photo/motorcycle-wheel-closeup-motorcycle-metal-parts-biker-meeting-in-the-city-children-sit-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=4CY9pKBPQx2adibKdUwjYe4erS1spijGPMABzsUVx1w=",
      price: "₹850",
    },
    {
      name: "Seat Cover",
      desc: "Comfortable waterproof seat cover for protection.",
      img: "https://images.unsplash.com/photo-1629017737235-f9abe39578d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdG9yY3ljbGUlMjBzZWF0JTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      price: "₹350",
    },
    {
      name: "Indicator Light",
      desc: "LED indicators for stylish looks and safety.",
      img: "https://images.unsplash.com/photo-1748590997703-a1853717a3b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1vdG9yY3ljbGUlMjBJbmRpY2F0b3IlMjBMaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      price: "₹190",
    },
  ];




  return (
    <div>
      <div className='pt-[30vh]'>
        <h2 className='font-[font2] lg:text-[8vw] text-7xl uppercase'>store</h2>
      </div>
      <section className="py-10 px-6 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-700 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="ProductCard p-4">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-white text-sm mt-1">{item.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#d3fd50] font-semibold">{item.price}</span>
                  <button className=" text-white px-3 py-1 rounded-lg text-sm border-2 hover:text-[#d3fd50] transition">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className='h-full'>
        <div className='flex items-center justify-center'>
          <div className='h-full lg:w-[60%]w-[70%] p-10 rounded-4xl flex flex-col bg-black items-center justify-center mt-10'>
          <h2 className='guest font-[font2] relative lg:text-[8vw]  text-7xl uppercase'>guests</h2>
          <h2 className='blur font-[font2] absolute lg:text-[8vw]  text-7xl uppercase'>guests</h2>
        </div>
        </div>
        <Feedback />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  )
}

export default Store