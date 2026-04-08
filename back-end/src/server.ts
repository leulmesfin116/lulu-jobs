import express from "express";
import resumeRoute from "./Routes/resumeRoute.ts";

const app = express();

app.use(express.json());

// api routes
app.use("/resume", resumeRoute);

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
