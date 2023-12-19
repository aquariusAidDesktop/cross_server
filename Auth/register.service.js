import { createHash } from "../midleware/createHash.js";
import { prisma } from "../prisma/prisma.js";
import asyncHandler from "express-async-handler";

export const registerUser = asyncHandler(async (req, res) => {
    const { email, password, login, role } = req.body

    if (!email || !password || !login) {
        res.status(400)
        throw new Error("invalid request data")
    }

    const isUserCreated = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (isUserCreated) {
        res.status(400)
        res.json({status: 0, message: "user already created"})
    }

    if (role) {
        const passwordHash = await createHash(password)
        try {
            const result = await prisma.user.create({
                data: {
                    login: login,
                    email: email,
                    password: password,
                    passwordHash: passwordHash,
                    role: role,
                }
            })
            res.status(200)
            res.json(result)
        } catch (error) {
            res.status(400)
            throw new Error(`Error with create user with role: ${error}`)
        }
    }


    try {
       const passwordHash = await createHash(password)
       const result = await prisma.user.create({
        data: {
            login: login,
            email: email,
            password: password,
            passwordHash: passwordHash
        }
       }) 
        res.status(200)
        res.json(result)
    } catch (error) {
        throw new Error(`Error with create user with out role: ${error}`)
    }
})

