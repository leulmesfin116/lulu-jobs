import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

import { db } from "../config/db.ts";

// read the token from the request
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("Auth middleware reached");
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization[1];
  } else if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    res.status(401).json({ error: "Not Authorized" });
  }
  // verify the token and extract the user
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {}
};
