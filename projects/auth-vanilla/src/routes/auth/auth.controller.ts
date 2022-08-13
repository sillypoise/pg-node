import type express from "express";
import { verify } from "argon2";

import { getUser } from "../../models/auth.model";

interface UserInfo {
    email: string;
    passwd: string;
}

async function httpAuth(req: express.Request, res: express.Response) {
    try {
        let { email, passwd }: UserInfo = req.body;

        let user: UserInfo | undefined = await getUser(email);

        if (!user) {
            throw new Error("User not found");
        }

        let { passwd: userHash } = user;

        let isValidHash = await verify(userHash, passwd);

        if (isValidHash) {
            console.log("You are authenticated 🔓");
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
}

export { httpAuth, UserInfo };
