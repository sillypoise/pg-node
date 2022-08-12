import express, { Request, Response } from "express";

import { sessionsRouter } from "./sessions/sessions.router";

let api = express.Router();

api.get("/", (_req: Request, res: Response) => {
    return res.json("🏠🏠🏠");
});

api.use("/sessions", sessionsRouter);

export { api };
