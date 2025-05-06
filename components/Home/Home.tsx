

import React from 'react'
import Hero from './Hero'
import Feature from './Feature'
import About from './About'
import Review from './Review/Review'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <Feature />
        <About textOrder='lg:order-1' imageOrder='lg:order-2' linkText='Learn More'
        title='Pure sound, no added noise' />
        <About  textOrder='lg:order-2' imageOrder='lg:order-1' linkText='Shop Now'
        title='Capture pure sound with the 70mm HD Driver' />
        <Review />
        <Contact />
    </div>
  )
}

export default Home