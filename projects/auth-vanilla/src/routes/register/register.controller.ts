import { hash } from "argon2";
import type express from "express";

import type { UserInfo } from "../auth/auth.controller";
import { registerUser } from "../../models/register.model";

async function httpRegister(req: express.Request, res: express.Response) {
    try {
        let { email, passwd }: UserInfo = req.body;

        let hashedPasswd = await hash(passwd);

        registerUser(email, hashedPasswd);

        return res.status(200).json("📝 Registration Successful");
    } catch (e: any) {
        return res.status(500).json("An error ocurred during registration");
    }
}

export { httpRegister };
