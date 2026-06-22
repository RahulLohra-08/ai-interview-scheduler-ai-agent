
import { QUESTIONS_PROMPT } from "@/services/constants/InterviewTypes";
import OpenAI from "openai";

export async function POST(req: Request) {

    const {jobPosition, jobDescription, duration, type} = await req.json(); 

    const FINAL_PROMPT = QUESTIONS_PROMPT
    .replace("{{jobTitle}}", jobPosition)
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{duration}}", duration)
    .replace("{{type}}", type);

    console.info("Final Prompt: ", FINAL_PROMPT);
    
    try {

        const client = new OpenAI({
            baseURL: 'https://openrouter.ai/api/v1',
            apiKey: process.env.OPENROUTER_API_KEY,
        });
        
        // First API call with reasoning
        const apiResponse = await client.chat.completions.create({
        model: 'openai/gpt-oss-120b:free', //model name
        messages: [
            {
            role: 'user' as const,
            content: FINAL_PROMPT,
            },
        ],
        // response_format: { type: 'json_object' },
        // reasoning: { enabled: true } 
        });

        return new Response(JSON.stringify({
            message: "Interview questions generated successfully",
            data: apiResponse.choices[0].message.content,
        }), { status: 200 });

    } catch (error) {
        console.error("Error in OpenAI API call: ", error);
        return new Response(JSON.stringify({ error: "Failed to generate interview questions" }), { status: 500 });
    }
}
