import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';

const QuestionsList = ({ formData }: any) => {

    const [loader, setLoader] = useState<boolean>(true);
    const [questionsList, setQuestionsList] = useState<any>([]);

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
          <div
            key={index}
            className="group rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">

              <div className="flex gap-4">

                <div className="flex items-center justify-center h-10 w-10 rounded-full border font-semibold text-sm">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-medium text-lg leading-7">
                    {item.question}
                  </h3>

                  <div className="mt-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          item.difficulty === "Easy"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : item.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                    >
                      {item.difficulty}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )}

</div>
  )
}

export default QuestionsList