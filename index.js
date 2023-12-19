import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv"


const prisma = new PrismaClient();
const app = express();
dotenv.config();

async function main() {



  app.listen(
    process.env.PORT,
    console.log(
      `🚀 Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
