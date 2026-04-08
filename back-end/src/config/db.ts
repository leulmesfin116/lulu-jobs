import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient({
  log: process.env.NODE_ENV==="development"?{"query", "error","warn"} :{"error"}
});

const connectDb=async()=>{
  try{
    await prisma.$connect()
  }catch(){

  }
}
const disconnectDb=async()=>{}
