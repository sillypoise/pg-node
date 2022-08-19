import dotenv from "dotenv";

dotenv.config();

let config = {
    GOOGLE_CLIENT_ID: process.env["GOOGLE_CLIENT_ID"]!,
    GOOGLE_CLIENT_SECRET: process.env["GOOGLE_CLIENT_SECRET"]!,
    COOkIE_SECRET_1: process.env["COOKIE_SECRET_1"]!,
    COOKIE_SECRET_2: process.env["COOKIE_SECRET_2"]!,
};

export { config };
