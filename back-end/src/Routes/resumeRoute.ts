import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.ts";

const router = express.Router();

router.use(authMiddleware);

router.get("/hello", (req, res) => {
  res.send({ message: "resume is being built" });
});

export default router;
