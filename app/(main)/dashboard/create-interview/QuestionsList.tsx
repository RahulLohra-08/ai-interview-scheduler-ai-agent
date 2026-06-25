'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuestionListContainer from './QuestionListContainer';
import supabase from '@/services/supabaseClient';
import { useUser } from '@/app/Provider';
import { v4 as uuidv4 } from 'uuid';

const QuestionsList = ({ formData, onCreateLink }: any) => {
    const {user}:any = useUser();
    const [loader, setLoader] = useState<boolean>(true);
    const [questionsList, setQuestionsList] = useState<any>([]);
    const [saveLoading, setSaveLoading] = useState<boolean>(false);

    useEffect(() => {
        console.log("Form Data in QuestionsList: ", formData);
        if(formData) {
            // Call your API here with formData
            generateInterviewQuestions(formData);
        }

    }, [formData]);

    const generateInterviewQuestions = async (data: any) => {
        setLoader(true);
        try {

           const response = await axios.post("/api/ai-model", {
                ...data
            });

            console.info("API Response: ", response.data.data);
            const responseData = response.data.data

            setQuestionsList(JSON.parse(responseData));
            setLoader(false);
        } catch(error) {
            setLoader(false);
            console.error("Error generating interview questions: ", error);
            toast.error("Failed to generate interview questions. Please try again.");
        } 
    }

    const onFinish = async () => {
      setSaveLoading(true);
      const interview_Id = uuidv4(); // Generate a unique ID for the interview

        const { data, error } = await supabase
        .from('Interviews')
        .insert([
          { 
            ...formData,
            questionList: questionsList,
            userEmail: user?.email,
            interview_Id: interview_Id
           },
        ])
        .select()

        if (error) {
          console.error("Insert Error:", error);
          toast.error(error.message);
          return;
        }

        setSaveLoading(false);
        toast.success("Interview saved successfully!");

        onCreateLink(interview_Id);
    }


  return (
    <div className="space-y-6">

  {loader && (
    <div className="p-8 rounded-2xl border bg-card shadow-sm flex flex-col items-center gap-4">
      <Loader2Icon className="animate-spin h-8 w-8 text-primary" />

      <div className="text-center">
        <h2 className="text-xl font-semibold">
          Generating Interview Questions
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          Our AI is crafting personalized questions for you...
        </p>
      </div>
    </div>
  )}

  {Array.isArray(questionsList) && questionsList.length > 0 && (
    <div className="space-y-4">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Interview Questions
        </h2>

        <span className="text-sm text-muted-foreground">
          {questionsList.length} Questions
        </span>
      </div>

      <div className="grid gap-4">
        {questionsList.map((item: any, index: number) => (
          <div key={index}>
            <QuestionListContainer item={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  )}

  <div className="flex items-center justify-end mt-6">
     <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => onFinish()} disabled={loader || saveLoading}>
      { loader || saveLoading ? (
        <Loader2Icon className="animate-spin h-4 w-4 mr-2" />
      ) : null}
      Create Interview Link & Finish
     </Button>
  </div>
</div>
  )
}

export default QuestionsList