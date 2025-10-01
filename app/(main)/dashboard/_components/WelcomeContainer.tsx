'use client'
import { useUser } from '@/app/Provider'
import Image from 'next/image';
import React from 'react'

const WelcomeContainer = () => {
    const { user } : any = useUser();
  return (
    <div className='bg-white p-2 rounded-xl flex items-center justify-between'>
        <div className=''>
            <h2 className='text-lg font-semibold'>Welcome Back, {user?.name}</h2>
            <h2 className='text-gray-500'>AI-Driven Interview, Hassel-Free Hiring</h2>
        </div>
        {user && (
            <Image src={user?.picture || '/default-profile.png'} alt="Profile Picture" width={40} height={40} className='rounded-full' />
        )}
    </div>
  )
}

export default WelcomeContainer