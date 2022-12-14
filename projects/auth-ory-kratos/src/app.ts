import type { V0alpha2ApiInterface } from "@ory/client";
import express, { Application, NextFunction, Request, Response } from "express";

let app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    console.log(res.locals);
    return res.status(200).json("Aliiiive");
});

app.get("*", (_req: Request, res: Response) => {
    res.status(404).json("404 - page not found");
});

app.get("/registration", (req, res) => {
    console.log(res);
});

export { app };
