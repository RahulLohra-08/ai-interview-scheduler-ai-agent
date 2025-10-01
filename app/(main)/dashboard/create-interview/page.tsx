
'use client'
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import FormContainer from "./_components/FormContainer"

const CreateInterview = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const onHandleInputChange = (field:any, value:any) => {
        setFormData({
            ...formData,
            [field]: value
        });
        console.log("Form Data: ", formData);
    }
  return (
    <div className='mt-10 px-4 md:px-24 lg:px-44 xl:px-56'>
        <div className='flex gap-5 items-center'>
            <ArrowLeft className='h-6 w-6 text-gray-500 cursor-pointer' onClick={() => router.back()}/>
            <h2 className='font-bold text-xl'>Create New Interview</h2>
        </div>
        <Progress value={step * 33.33} className='my-5 text-primary'/>
        <FormContainer onHandleInputChange={onHandleInputChange}/>
    </div>
  )
}

export default CreateInterview