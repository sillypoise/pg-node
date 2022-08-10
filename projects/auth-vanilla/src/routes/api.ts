import express, { Request, Response } from "express";
import { hash, argon2id } from "argon2";
import { db } from "../services/db";

let api = express.Router();

// api.use("/auth", authRouter);
api.get("/auth", (_req: Request, res: Response) => {
    try {
        return res.status(200).json("Authentication Endpoint");
    } catch (e: any) {
        return res.status(500).json({
            error: e.message,
        });
    }
});

api.post("/auth/register", async (req: Request, res: Response) => {
    try {
        let { email, passwd }: { email: string; passwd: string } = req.body;
        let hashedPasswd = await hash(passwd);

        console.log(hashedPasswd);

        return res.status(200).json("📝 Registration Successful");
    } catch (e) {
        return res.status(500).json("erroroni");
    }
});

export { api };
