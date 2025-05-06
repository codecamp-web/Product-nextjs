"use client"

import React, { useEffect, useState } from 'react'
import { navLinks } from '@/data/data'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingBag } from '@mui/icons-material';
import ThemeToggle from '../../Helper/ThemeToggle';

type Props = {
    isOpen: () => void
}

const Navbar = ({isOpen}: Props) => {
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90) setNavBg(true)
            if(window.scrollY < 90) setNavBg(false)
        }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
    }, [])

    return (
        <div className={` ${navBg ? "bg-amber-700 shadow-md": "fixed"}
         transition-all duration-200 h-24 z-50 fixed w-full `}>
            <div className='flex items-center h-full justify-between px-3 md:px-0
               md:w-3/4 mx-auto'>
            <div className='text-white text-2xl md:text-2xl font-bold flex items-center'>
              LOGO
            </div>
                <div className='hidden lg:flex items-center gap-x-8'>
                    {navLinks.map((item) => {
                        return <Link href={item.url} key={item.id}>
                            <p className="relative text-white text-base font-medium w-fit
  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white
  after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform
  after:duration-300 after:origin-right">
                                {item.title}
                            </p>

                        </Link>
                    })}
                </div>
                <div className='flex items-center text-sm text-white'>
                    <button className='bg-green-600 px-3 py-2 rounded-md'>
                    <ShoppingBag className='mr-2'/>
                    Buy Now
                    </button>
                    <ThemeToggle  />
                <span onClick={isOpen} className='lg:hidden'>
                <MenuIcon className='w-8 h-8 cursor-pointer text-white md:hidden ml-5' />
                </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar