import jwt from "jsonwebtoken";

import { db } from "../config/db.ts";

export const authMiddleware = async () => {
  console.log("Auth middleware reached");
};
