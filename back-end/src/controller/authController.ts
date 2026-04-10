import type { Request, Response } from "express";
import { db } from "../config/db.ts";

type userInput = {
  name: string;
  email: string;
  password: string;
};
const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  // checking if the user exists
  const userExists = await db.user.findUnique({ where: { email: email } });
  if (userExists) {
    return res.json({ message: "user already exists" });
  }
};
export { register };
