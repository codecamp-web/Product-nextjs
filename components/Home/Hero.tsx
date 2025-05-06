

import { Headphones } from '@mui/icons-material'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import headset from "@/imgs/headset.jpg"

const Hero = () => {
  return (
    <div className='bg_clip relative w-full h-screen flex justify-center flex-col bg-amber-400'>
      <div className='md:w-4/5 px-3 md:px-0 mx-auto items-center grid grid-cols-1 
      lg:grid-cols-2 gap-10 mt-20'>
      
      <div className='space-y-5'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl  font-bold'>
          Super sound, tangible quality
        </h1>
        <p className='text-xs sm:text-sm md:text-base font-medium '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia incidunt 
          dolorum voluptates blanditiis! Quos quo necessitatibus iusto quia saepe 
          dolorem officiis voluptate eius omnis placeat! Facilis debitis incidunt 
          animi amet!
        </p>
        <div className='space-x-3'>
          <button className='bg-blue-500 px-8 py-2 rounded-md  text-sm
          hover:bg-blue-300 duration-500 transition'>
            Buy Now
          </button>
          <button className='bg-green-600 px-8 py-2 rounded-md  text-sm
          hover:bg-green-300 duration-500 transition'>
            Explore More
          </button>
        </div>
      </div>

      <div>
        <Image src={headset} width={500} height={500} alt='hero_img'
         className='rounded-sm'/>
      </div>
      </div>
    </div>
  )
}

export default Hero