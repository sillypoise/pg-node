import express from "express";
import { googleOAuthRouter } from "../google/googleOAuth.router";

let authRouter = express.Router();

authRouter.use("/google", googleOAuthRouter);

export { authRouter };
