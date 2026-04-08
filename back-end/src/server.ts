import express from "express";
import resumeRoute from "./Routes/resumeRoute.ts";

const app = express();

app.use(express.json());

app.use("/api", resumeRoute);

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
