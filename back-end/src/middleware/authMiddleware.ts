import jwt from "jsonwebtoken";

import { prisma } from "../config/db.ts";

export const authMiddleware = async () => {
  console.log("Auth middleware reached");
};
