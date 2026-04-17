import type { Request, Response } from "express";

import { openai } from "../lib/openai.ts";

export const generatedResume = async (req: Request, res: Response) => {
  try {
    const { name, email, linkedin, github, skills, experience, education } =
      req.body;
    const prompt = `Create a professional ATS-friendly resume.

Return ONLY JSON:
{
  "name": "",
  "email": "",
  "linkedin": "",
  "github": "",
  "summary": "",
  "skills": [],
  "experience": [],
  "education": []
}

User:
Name: ${name}
Email: ${email}
LinkedIn: ${linkedin}
GitHub: ${github}
Skills: ${skills}
Experience: ${experience}
Education: ${education}`;
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const rawResponse = completion.choices[0]?.message?.content;
    if (!rawResponse) {
      return res.status(500).json({ error: "No response from OpenAI" });
    }
   
