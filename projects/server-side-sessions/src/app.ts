import dotenv from "dotenv";
import express from "express";
import session from "express-session";

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
        },
        resave: false,
        saveUninitialized: false,
        name: "serverZesh",
        // store
    })
);

app.use(express.json());

app.use("/v1", api);

export { app };
