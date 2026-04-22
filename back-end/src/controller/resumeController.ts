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
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
    });
    const rawResponse = completion.choices[0]?.message?.content;
    if (!rawResponse) {
      return res.status(500).json({ error: "No response from OpenAI" });
    }
    console.log("Raw Response from OpenAI:", rawResponse);

    // Clean markdown code blocks if present
    const cleanResponse = rawResponse.replace(/```json|```/g, "").trim();
    
    const data = JSON.parse(cleanResponse);
    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Resume generation error:", error);
    const errorMessage = error.message || "Unable to create a resume";
    return res.status(500).json({ error: errorMessage });
  }
};
