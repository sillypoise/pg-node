import express from "express";
import passport from "passport";
import {
    httpAuth,
    httpGoogleAuth,
    httpGoogleAuthCallback,
} from "./auth.controller";

let authRouter = express.Router();

authRouter.post("/", httpAuth);

authRouter.get(
    "/google",
    passport.authenticate("google", { scope: ["email"] }),
    httpGoogleAuth
);

authRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/v1/auth/google/failure",
        successRedirect: "/v1/home",
        session: false,
    }),
    httpGoogleAuthCallback
);

export { authRouter };
