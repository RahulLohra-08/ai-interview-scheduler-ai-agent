'use client'
import { Phone, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CreateOptions = () => {
  return (
    <div className='grid sm:grid-cols-1  md:grid-cols-2 gap-5'>
        <Link href={'/dashboard/create-interview'} className='bg-white border-gray-200 p-5 rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-200'>
            <Video className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'/>
            <h2 className='font-bold'>Create New Interview</h2>
            <p className='text-gray-500'>Create AI Interviews and scheduled then with candidates</p>
        </Link>
        <Link href={'/dashboard/create-interview'} className='bg-white border-gray-200 p-5 rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-200'>
            <Phone className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'/>
            <h2 className='font-bold'>Create Phone Screening Call</h2>
            <p className='text-gray-500'>Scheduled phone screening call with candidates</p>
        </Link>
    </div>
  )
}

export default CreateOptions