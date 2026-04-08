import express from "express";

const router = express.Router();

router.get("/resume", (req, res) => {
  res.send({ message: "resume is being built" });
});

export default router;