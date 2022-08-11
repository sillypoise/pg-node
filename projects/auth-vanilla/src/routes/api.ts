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

api.get("/cookies", (req: Request, res: Response) => {
    try {
        res.status(200);
        res.cookie("cookie", "cookieValue");
        res.cookie("signedCookie", "signedCookieValue", {
            signed: true,
        });
        // log regular cookies, does not show signed cookies
        console.log("🍪", req.cookies);
        // log signed cookies
        console.log("🔑🍪", req.signedCookies);
        return res.json("Testing cookies 🍪🍪🍪");
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json("An error ocurred during cookie assignment");
    }
});

api.get("/sessions", (req: Request, res: Response) => {
    try {
        // Fancy sessino management
        return res.send(200).json("session created");
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json("an error ocurred during cookie assignment");
    }
});

export { api };
