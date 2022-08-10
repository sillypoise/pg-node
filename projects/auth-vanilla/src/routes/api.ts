import express, { Request, Response } from "express";
import { hash, verify } from "argon2";
import { db } from "../services/db";

let api = express.Router();

// api.use("/auth", authRouter);
api.post("/auth", async (req: Request, res: Response) => {
    try {
        let { email, passwd }: { email: string; passwd: string } = req.body;

        let user: { email: string; passwd: string } | undefined = await (
            await db
        ).get("SELECT email, passwd FROM users WHERE email = :email", {
            ":email": email,
        });

        if (!user) {
            throw new Error("User not found");
        }

        let { passwd: userHash } = user;

        let isValidHash = await verify(userHash, passwd);

        if (isValidHash) {
            console.log("Success! Here's your token: 🍪");
        } else {
            throw new Error(
                "An error has occurred. Let me obfuscate that for you. Try again."
            );
        }

        return res.status(200).json("🔑 Authentication Endpoint");
    } catch (e: any) {
        return res.status(500).json({
            error: e.message,
        });
    }
});

api.post("/register", async (req: Request, res: Response) => {
    try {
        let { email, passwd }: { email: string; passwd: string } = req.body;
        let hashedPasswd = await hash(passwd);

        (await db).run(
            "INSERT INTO users (email, passwd) VALUES(:email, :passwd)",
            {
                ":email": email,
                ":passwd": hashedPasswd,
            }
        );

        return res.status(200).json("📝 Registration Successful");
    } catch (e) {
        return res.status(500).json("An error ocurred during registration");
    }
});

export { api };
