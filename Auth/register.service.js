import { prisma } from "../prisma/prisma.js";
import asyncHandler from "express-async-handler";

const registerUser = asyncHandler(async (req, res) => {
    
    const { email, password } = req.body

})