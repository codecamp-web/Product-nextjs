
"use client"
import {   ModeNight, Sunny } from '@mui/icons-material'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)

    const {theme, setTheme, systemTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    if(!mounted) return null

    const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <button onClick={() =>
    setTheme(currentTheme === "dark" ? "light" : "dark")}
     className='p-2 transition ml-3 cursor-pointer'>
        {currentTheme === "dark" ? (
            <Sunny />
        ) : (
            <ModeNight />
        )}
    </button>    
  )
}

export default ThemeToggle