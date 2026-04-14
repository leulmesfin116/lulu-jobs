import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

import { db } from "../config/db.ts";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

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

    const user = await db.user.findUnique({
      where: { id: decode.id },
    });
    if (!user) {
      res.status(401).json({ error: "Not User found" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "NOt Authorized" });
  }
};
