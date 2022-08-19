import express from "express";
import passport from "passport";
import {
    httpGoogleAuth,
    httpGoogleAuthCallback,
} from "./googleOAuth.controller";

let googleOAuthRouter = express.Router();

// Route for authenticating with Google
googleOAuthRouter.get("/", passport.authenticate("google"), httpGoogleAuth);

// Route for callback after authenticating with Google,
// must match the callback URL in the Google App settings
googleOAuthRouter.get(
    "/callback",
    passport.authenticate("google", {
        failureRedirect: "/v1/auth/google/failure",
        successRedirect: "/v1/home",
    }),
    httpGoogleAuthCallback
);

export { googleOAuthRouter };
