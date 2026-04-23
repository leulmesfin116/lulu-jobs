import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.ts";

const router = express.Router();

router.use(authMiddleware);

// This route is now a placeholder as generation is handled on the frontend
router.get("/status", (req, res) => {
  res.send({ message: "Resume service is active" });
});

export default router;
