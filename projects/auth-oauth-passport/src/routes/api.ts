import express from "express";
import { authRouter } from "./auth/auth.router";

let apiRouter = express.Router();

apiRouter.use("/auth", authRouter);

export { apiRouter };
