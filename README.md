;; supabase setup

;; Step 1: Create a Supabase account at https://supabase.com
;; Step 2: Create a new project in the Supabase dashboard
;; Step 3: Navigate to Project Settings > API to find your project URL and anon key
;; Step 4: Install the Supabase client library for your language
;;         For JavaScript/TypeScript: npm install @supabase/supabase-js
;;        
;; Step 5: Initialize the Supabase client in your code with your project URL and anon key
;; Step 6: Set up your database tables in the Supabase SQL Editor or Table Editor
;; Step 7: Configure Row Level Security (RLS) policies for your tables if needed
;; Step 8: (Optional) Set up authentication providers in Authentication > Providers
;; Step 9: (Optional) Configure storage buckets in Storage if you need file uploads
;; Step 10: Start using Supabase in your application    

;; Generating intverview questions using OpenAI API
using Open Router ai agent to generate interview questions based on the job description and candidate profile. 
The agent will analyze the provided information and create relevant questions to assess the candidate's suitability for the role.

STEPS

1. Set up the OpenRouter API key in your environment variables.
2. Go to on website in Model section and select the model you want to use for generating interview questions.
3. select the OpenAI: gpt-oss-120b (free) model for better results.

Using third-party SDKs
For information about using third-party SDKs and frameworks with OpenRouter, please see our frameworks documentation:https://openrouter.ai/docs/guides/community/frameworks-and-integrations-overview.

https://openrouter.ai/docs/guides/community/openai-sdk

install: npm i openai

api -> ai-model -> route.jsx