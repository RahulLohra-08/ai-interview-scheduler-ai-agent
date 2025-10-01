'use client'
import { Phone, Video } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CreateOptions = () => {
  return (
    <div className='grid sm:grid-cols-1  md:grid-cols-2 gap-5'>
        <div className='bg-white border-gray-200 p-5 rounded-lg'>
            <Video className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'/>
            <h2 className='font-bold'>Create New Interview</h2>
            <p className='text-gray-500'>Create AI Interviews and scheduled then with candidates</p>
        </div>
        <div className='bg-white border-gray-200 p-5 rounded-lg'>
            <Phone className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'/>
            <h2 className='font-bold'>Create Phone Screening Call</h2>
            <p className='text-gray-500'>Scheduled phone screening call with candidates</p>
        </div>
    </div>
  )
}

export default CreateOptions