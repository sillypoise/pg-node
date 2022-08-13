import type { UserInfo } from "../routes/auth/auth.controller";
import { db } from "../services/db";

async function getUser(email: string) {
    let user: UserInfo | undefined = await (
        await db
    ).get("SELECT email, passwd FROM users WHERE email = :email", {
        ":email": email,
    });
    return user;
}

export { getUser };
