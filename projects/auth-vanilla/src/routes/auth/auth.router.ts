import express from "express";

import { httpAuth } from "./auth.controller";

let authRouter = express.Router();

authRouter.post("/", httpAuth);

export { authRouter };
