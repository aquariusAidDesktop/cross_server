import argon2 from "argon2"

export const createHash = async(password) => {
    const hash = await argon2.hash(password)
    return hash
}