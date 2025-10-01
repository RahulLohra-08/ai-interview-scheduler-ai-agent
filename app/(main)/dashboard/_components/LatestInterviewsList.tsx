'use client'
import { Button } from '@/components/ui/button'
import { Camera, Video } from 'lucide-react'
import React, { useState } from 'react'

const LatestInterviewsList = () => {
    const [interview, setInterview] = useState([])
  return (
    <div className='my-5'>
        <h2 className='font-bold text-xl'>Previously Created</h2>
        {interview.length === 0 && (
            <div className='p-5 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded-lg mt-5'>
                <Video className='h-10 w-10 text-primary'/>
                <h2 className='text-gray-500'>No interviews created yet</h2>
                <Button>
                    Create New Interview
                </Button>
            </div>
        )}
    </div>
  )
}

export default LatestInterviewsList