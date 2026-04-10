import express from "express";
import { register, login } from "../controller/authController";

const router = express.Router();

router.get("login", login);
router.post("/register", register);
export default router;
