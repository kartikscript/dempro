import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'

const HeroPage = () => {
  return (
    <main className='w-10/12 h-full mx-auto py-8'>
      <Navbar/>
      <div className='p-6 pt-[6rem] grid grid-cols-7'>
        <div className='col-span-5'>
          <h1 className='text-[5rem] leading-[5rem] tracking-wide font-[500] font-caveat capitalize'>Enhance your living space with<br/> our top-rated products</h1>
          <h3 className='text-lg font-rubik font-[300] w-[85%] pt-6 tracking-widest'>Discover a curated selection of high-quality products designed to transform your home into a haven of comfort and style. Our top-rated items, chosen for their exceptional craftsmanship and innovative design, cater to every aspect of your living space.</h3>
          <button className=''>Get Started</button>
        </div>
        <Image src='/assets/images/hero-img.jpg' alt='bars image' width={300} height={300} className='col-span-2 items-center scale-[1.5]'/>
      </div>
    </main>
  )
}

export default HeroPage