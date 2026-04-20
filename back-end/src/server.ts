import express from "express";
import resumeRoute from "./Routes/resumeRoute.ts";
import pdfRoute from "./Routes/pdfRoute.ts";
import { config } from "dotenv";
import { connectDb, disconnectDb } from "./config/db.ts";
import authRoute from "./Routes/authRoute.ts";
import cors from "cors";
config();
connectDb();
// disconnectDb(); // Removed this line as it was closing the connection immediately
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use("/resume", resumeRoute);
app.use("/auth", authRoute);
app.use("/pdf", pdfRoute);

app.get("/", (req, res) => {
  res.send("Server is up and running");
});
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection", err);
  server.close(async () => {
    await disconnectDb();
    process.exit(1);
  });
});

// handle uncaught exception
process.on("uncaughtException", async (err) => {
  console.error("uncaughtException", err);
  await disconnectDb();
  process.exit(1);
});
// graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM recieved,shutting down gracefully");
  server.close(async () => {
    await disconnectDb();
    process.exit(0);
  });
});
