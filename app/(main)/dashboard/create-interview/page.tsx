
'use client'
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import FormContainer from "./_components/FormContainer"
import QuestionsList from "./QuestionsList"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

const CreateInterview = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({});

    const onHandleInputChange = (field:any, value:any) => {
        // console.log("Field: ", field, "Value: ", value);
        setFormData({
            ...formData,
            [field]: value
        });
        
    }

    const generateInterviewQuestions = () => {
      
        if(!formData.jobPosition || !formData.jobDescription || !formData.duration) {
           toast("Please fill all the fields");
           return;
        }

        console.log("Form Data: ", formData);
        setStep(step + 1);
    }
  return (
    <div className='mt-10 px-4 md:px-24 lg:px-44 xl:px-56'>
        <div className='flex gap-5 items-center'>
            <ArrowLeft className='h-6 w-6 text-gray-500 cursor-pointer' onClick={() => router.back()}/>
            <h2 className='font-bold text-xl'>Create New Interview</h2>
        </div>
        <Progress value={step * 33.33} className='my-5 text-primary'/>
        {
            step == 1 ? <FormContainer  onHandleInputChange={onHandleInputChange} generateInterviewQuestions={generateInterviewQuestions}/>
            : step == 2 ? <QuestionsList formData = {formData}/> : null
        }
    </div>
  )
}

export default CreateInterview