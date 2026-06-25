'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const InterviewLink = ({ interview_id, formData }: { interview_id: string; formData: any }) => {

    const getInterviewURL = (interview_id: string) => {
       const url = process.env.NEXT_PUBLIC_HOST_URL + `/${interview_id}`;
       return url;
    }

  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-10'>
        <Image src={'/circle.png'} alt="Interview Link" width={200} height={200} className='h-[50px] w-[50px]   '/>
        <h2 className='font-bold text-lg mt-4'>Your AI Interview is Ready!</h2>
        <p className='text-center mt-3'>Share this link with your candidates to start the interview.</p>

        <div className='w-full p-7 mt-6 rounded-xl bg-white'>
            <div className='flex items-center justify-between gap-2 p-3 mt-4'>
                <h2 className='font-bold'>Interview Link</h2>
                <h2 className='text-blue-500 cursor-pointer font-semibold p-2 rounded-xl bg-slate-100'>Valid For 30 Days</h2>
            </div>
            <div className='mt-3 flex items-center justify-between gap-2 '>
                <Input defaultValue={getInterviewURL(interview_id)} disabled={true} />
                <Button className=''><Copy /> Copy Link</Button>
            </div>
            <hr className='my-7' />
        </div>
    </div>
  )
}

export default InterviewLink