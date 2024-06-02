'use client'
import { navLinks } from '@/constants'
import { ArrowUpRightFromSquare, CandlestickChart, Projector } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='py-3 px-6 rounded-full bg-gradient-to-t from-emerald-200 to-emerald-300 flex justify-between items-center'>
      <div className='flex gap-1 items-center'>
        <h1 className='font-caveat text-5xl font-[700] text-emerald-800'>Dem-Pro</h1>
        <Projector className='size-14  stroke-1 text-emerald-800'/>
      </div>
      <span className='flex gap-10 items-center'>
          {
            navLinks.map((navLink)=>{
              return(
                <nav key={navLink.label}>
                  <Link className='text-lg tracking-widest font-rubik font-[500] text-white ' href={navLink.route}>{navLink.label}</Link>
                </nav>
              )
            })
          }
      </span>
      <span className='text-sm text-gray-700 font-medium  flex flex-col items-center'>
        <ArrowUpRightFromSquare/>
        <a>Source Code</a>  
      </span>
    </header>
  )
}

export default Navbar