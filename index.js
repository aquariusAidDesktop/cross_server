import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";

import { registerUser } from "./Auth/register.service.js";


const prisma = new PrismaClient();
const app = express();
dotenv.config();

async function main() {

  app.use(morgan("tiny"));
  app.use(express.json());

  app.use("/api/register-user/", registerUser)


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
