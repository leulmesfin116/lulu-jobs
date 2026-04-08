import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send({ message: "resume is being built" });
});

export default router;
