import type { Request, Response } from "express";
import { db } from "../config/db.ts";
import bcrypt from "bcryptjs";
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
    return res.status(400).json({ message: "user already exists" });
  }
  // hashing the  password
  const salt = await bcrypt.genSalt(11);
  const hashPassword = await bcrypt.hash(password, salt);
  // create a user
  const user = await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });
  res.status(201).json({
    status: "success",
    data: {
      user: {
        id: user.id,
        name: name,
        email: email,
      },
    },
  });
};

export { register, login };
