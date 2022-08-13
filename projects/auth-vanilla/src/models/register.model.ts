import { db } from "../services/db";

async function registerUser(email: string, passwd: string) {
    await (
        await db
    ).run("INSERT INTO users (email, passwd) VALUES(:email, :passwd)", {
        ":email": email,
        ":passwd": passwd,
    });
    return "📝 Registration Successful";
}

export { registerUser };
