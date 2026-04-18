import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.ts";
import { generatePdf } from "../controller/pdfController.ts";

const router = express.Router();

router.use(authMiddleware);

router.post("/generate", generatePdf);

export default router;
