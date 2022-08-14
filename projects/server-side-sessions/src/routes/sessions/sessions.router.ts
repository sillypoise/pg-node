import express from "express";

import { createSession } from "./sessions.controller";

let sessionsRouter = express.Router();

sessionsRouter.get("/", createSession);

export { sessionsRouter };
