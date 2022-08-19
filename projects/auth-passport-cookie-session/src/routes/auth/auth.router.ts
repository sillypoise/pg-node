import express from "express";
import passport from "passport";
import { googleOAuthRouter } from "../google/googleOAuth.router";

let authRouter = express.Router();

authRouter.use(
    "/google",
    passport.initialize(),
    passport.session(),
    googleOAuthRouter
);

authRouter.get("/signout", (req, res) => {
    // ... logout logic done with passport session middleware
});

export { authRouter };
