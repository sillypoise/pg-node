import dotenv from "dotenv";
import express from "express";
import session from "express-session";
let SQLiteStore = require("connect-sqlite3")(session);

import { api } from "./routes/api";

dotenv.config();
let cookieSecret = String(process.env["COOKIE_SECRET"]!);

let app = express();

app.use(
    session({
        secret: cookieSecret,
        cookie: {
            signed: true,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        },
        resave: false,
        saveUninitialized: false,
        name: "serverZesh",
        store: new SQLiteStore({
            table: "sessions",
            db: "auth.db",
            dir: "./db",
        }),
    })
);

app.use(express.json());

app.use("/v1", api);

export { app };
