import { BriefcaseBusinessIcon, Code2Icon, LoaderPinwheel, Puzzle,  User2Icon } from "lucide-react";

export const InterviewType = [
  {
   title: "Technical Interview",
   icon: Code2Icon
  },
  {
   title: "Behavioral Interview",
   icon: User2Icon
  },
  {
   title: "Experience",
    icon: BriefcaseBusinessIcon
  },
  {
    title: "Problem Solving",
    icon: Puzzle
  },
  {
    title: "Leadership",
    icon: LoaderPinwheel
  }
];  

export const QUESTIONS_PROMPT = `
You are an expert technical interviewer.

Based on the following inputs, generate a well-structured list of interview questions.

Job Title: {{jobTitle}}

Job Description: {{jobDescription}}

Interview Duration: {{duration}}

Interview Type: {{type}}

📝 Your task:

1. Analyze the job description to identify:
   - Key responsibilities
   - Required technical skills
   - Preferred qualifications

2. Generate interview questions depending on interview duration:
   - 5 mins → 5 Questions
   - 15 mins → 10 Questions
   - 30 mins → 15 Questions
   - 45 mins → 20 Questions
   - 60 mins → 25 Questions

3. Questions should be based on interview type:
   - Technical Interview → Technical concepts, coding, system design
   - Behavioral Interview → Communication, teamwork, conflict resolution
   - Experience → Previous projects and work experience
   - Problem Solving → DSA, algorithms, logical reasoning
   - Leadership → Team management and decision making

4. Difficulty should increase gradually:
   Easy → Medium → Hard

5. Return ONLY valid JSON.

Expected Output Format:

[
  {
    "question": "Explain the difference between let, const and var in JavaScript.",
    "difficulty": "Easy"
  },
  {
    "question": "How does React Virtual DOM work?",
    "difficulty": "Medium"
  }
]
`;