'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InterviewType } from '@/services/constants/InterviewTypes'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type FormContainerProps = {
  onHandleInputChange: (field: string, value: any) => void;
};

const FormContainer = ({onHandleInputChange}: FormContainerProps) => {

    const [InterviewTypes, setInterviewTypes] = useState<any>([]);

    useEffect(() => {
        if(InterviewTypes && InterviewTypes.length > 0) {
            onHandleInputChange('type', InterviewTypes);
        }
    }, [InterviewTypes]);

  return (
    <div className='p-5 bg-white rounded-xl'>
        <div>
            <h2 className='text-sm'>Job Position</h2>
            <Input type='text' placeholder='e.g. Software Engineer' className='mt-2 mb-5' 
                onChange={(e) => onHandleInputChange('jobPosition', e.target.value)}
            />
        </div>
        <div>
            <h2 className='text-sm'>Job Description</h2>
            <Textarea placeholder='Enter job description here...' className='mt-2 mb-5 h-200px'
                onChange={(e) => onHandleInputChange('jobDescription', e.target.value)}
            />
        </div>
        <div>
            <h2 className='text-sm'>Interview Duration</h2>
            <Select onValueChange={(value: any) => onHandleInputChange('duration', value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="5 Min">5 Min</SelectItem>
                    <SelectItem value="15 Min">15 Min</SelectItem>
                    <SelectItem value="30 Min">30 Min</SelectItem>
                    <SelectItem value="45 Min">45 Min</SelectItem>
                    <SelectItem value="60 Min">60 Min</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className='mt-5'>
            <h2 className='text-sm'>Interview Type</h2>
            <div className='flex flex-wrap gap-3 mt-2'>
                {InterviewType && InterviewType.map((type, index) => (
                  <div key={index} className={`flex p-1 px-2 rounded-2xl bg-white border border-gray-300 cursor-pointer hover:bg-secondary transition-colors duration-200 ${InterviewTypes.includes(type.title) && 'bg-blue-50 text-primary border-primary'}`}
                    onClick={() => {
                        setInterviewTypes((prev:any) => [...prev, type.title]);
                    }}
                  >
                    <type.icon className='h-6 w-6 mr-2'/>
                    <span>{type.title}</span>
                  </div>  
                ))}
            </div>
        </div>
        <div className='mt-10 flex items-center justify-end'>
            <Button>
                Generate Questions <ArrowRight />
            </Button>
        </div>
    </div>
  )
}

export default FormContainer