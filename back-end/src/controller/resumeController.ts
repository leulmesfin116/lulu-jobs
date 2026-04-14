import { Request, Response } from "express";

import { openai } from "../lib/openai.ts";

export const generatedResume = async (req: Request, res: Response) => {
  try {
    const { name, skills, techstacks, experience, email, education } = req.body;
    const prompt = ``;
  } catch (error) {
    res.status(401).json({ error: "Unable to create a resume" });
  }
};
