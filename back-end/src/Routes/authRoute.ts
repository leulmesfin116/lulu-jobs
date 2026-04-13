import express from "express";
import { register, login, logout } from "../controller/authController";

const router = express.Router();

router.get("login", login);
router.get("logout", logout);
router.post("/register", register);
export default router;
