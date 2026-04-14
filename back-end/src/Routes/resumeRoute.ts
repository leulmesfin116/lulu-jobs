import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.ts";
import { generatedResume } from "../controller/resumeController.ts";

const router = express.Router();

router.use(authMiddleware);

router.get("/resume", generatedResume);
router.get("/hello", (req, res) => {
  res.send({ message: "resume is being built" });
});

export default router;
