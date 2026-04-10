import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

const connectDb = async () => {
  try {
    await db.$connect();
    console.log("DB is connected via prisma");
  } catch (error) {
    console.log(`DB connection error ${error}`);
    process.exit(1);
  }
};
const disconnectDb = async () => {
  await db.$disconnect();
};
export { db, connectDb, disconnectDb };
