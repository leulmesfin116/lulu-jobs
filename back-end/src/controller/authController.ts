import type { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  res.json({ message: "you are registered" });
};

export { register };
