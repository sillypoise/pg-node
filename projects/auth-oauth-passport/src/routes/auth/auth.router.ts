import express from "express";
import { googleOAuthRouter } from "../google/googleOAuth.router";

let authRouter = express.Router();

authRouter.use("/google", googleOAuthRouter);

authRouter.get("/signout", (req, res) => {
    // ... logout logic done with passport session middleware
});

export { authRouter };
