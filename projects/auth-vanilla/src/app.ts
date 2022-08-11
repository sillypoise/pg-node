import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";

import { api } from "./routes/api";

dotenv.config();
const app = express();

let cookieSecret = String(process.env["COOKIE_SECRET"]);

app.use(express.json());

app.use(cookieParser(cookieSecret));

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json("Congrats!");
});

app.use("/v1", api);

export { app };
