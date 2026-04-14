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
  } catch (error) {
    res.status(401).json({ error: "Unable to create a resume" });
  }
};
