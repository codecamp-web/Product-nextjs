

import React from 'react'
import {
    Fingerprint,
    Chat,
    TouchApp,
    NotificationAdd,
    Wifi,
    Watch,
  } from "@mui/icons-material";
  import { ReactElement } from "react";
  
  const ftData = [
    {
      id: 1,
      title: "Secure Access",
      description: "Use biometric fingerprint authentication for enhanced security.",
      icon: <Fingerprint />,
    },
    {
      id: 2,
      title: "Instant Messaging",
      description: "Stay connected with real-time chat capabilities.",
      icon: <Chat />,
    },
    {
      id: 3,
      title: "Touch Control",
      description: "Interact easily with intuitive touch gestures.",
      icon: <TouchApp />,
    },
    {
      id: 4,
      title: "Notifications",
      description: "Receive important alerts as they happen.",
      icon: <NotificationAdd />,
    },
    {
      id: 5,
      title: "Wireless Connectivity",
      description: "Seamless and fast Wi-Fi support for all devices.",
      icon: <Wifi />,
    },
    {
      id: 6,
      title: "Smart Watch Sync",
      description: "Integrate and sync with your smartwatch effortlessly.",
      icon: <Watch />,
    },
  ];
  

const Feature = () => {
    
  return (
    <div className='relative mx-auto px-3 md:px-0 w-3/4 py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {ftData.map((item) => {
                return <div key={item.id} className='text-center mx-auto space-y-3'>
                    <div className='mx-auto text-center text-amber-700 text-2xl'>
                        {item.icon}
                    </div>
                    <div className='text-lg font-semibold'>
                        {item.title}
                    </div>
                    <div className='text-base text-gray-500'> 
                        {item.description}
                     </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Feature