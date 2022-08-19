import dotenv from "dotenv";

dotenv.config();

let config = {
    GOOGLE_CLIENT_ID: process.env["GOOGLE_CLIENT_ID"]!,
    GOOGLE_CLIENT_SECRET: process.env["GOOGLE_CLIENT_SECRET"]!,
};

export { config };
