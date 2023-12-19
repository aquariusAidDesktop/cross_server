import { prisma } from "../prisma/prisma.js";
import asyncHandler from "express-async-handler";

export const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    
    if (!email, !password) { 
        res.status(400)
        throw new Error("invalid request data")
    }

    
})