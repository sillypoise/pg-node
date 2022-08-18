import express from "express";
import passport from "passport";
import { httpGoogleAuth, httpGoogleAuthCallback } from "./auth.controller";

let authRouter = express.Router();

// Route for authenticating with Google
authRouter.get("/google", passport.authenticate("google"), httpGoogleAuth);

// Route for callback after authenticating with Google,
// must match the callback URL in the Google App settings
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
