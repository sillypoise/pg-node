import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
let SQLiteStore = require("connect-sqlite3")(session);
import { api } from "./routes/api";

dotenv.config();
const app = express();

let cookieSecret = String(process.env["COOKIE_SECRET"]);

app.use(express.json());

// ! cookieParser can be used in conjuction with express-session as long as the secret is the same.
app.use(cookieParser(cookieSecret));

app.use(
    session({
        secret: cookieSecret,
        cookie: {
            signed: false,
        },
        resave: false,
        saveUninitialized: false,
        name: "zesh",
        store: new SQLiteStore({
            table: "sessions",
            db: "auth.db",
            dir: "./db",
        }),
    })
);

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json("Congrats!");
});

app.use("/v1", api);

export { app };
