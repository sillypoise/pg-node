import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as OAuthGoogleStrategy } from "passport-google-oauth20";

import { apiRouter } from "./routes/api";

dotenv.config();

let config = {
    GOOGLE_CLIENT_ID: process.env["GOOGLE_CLIENT_ID"]!,
    GOOGLE_CLIENT_SECRET: process.env["GOOGLE_CLIENT_SECRET"]!,
};

const AUTH_OPTIONS = {
    // callback URL must match the callback URL in the Google App settings
    callbackURL: "/v1/auth/google/callback",
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    scope: ["email"],
};

function verifyCallback(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any
) {
    console.log("Google profile", profile);
    // Do whatever you want with the profile info you get back

    // Add your own logic here to check if the user is in your database
    // If the user is in your database, call done with the user object
    // Alternatively, you can just call done with `false` to make the user a new user
    // If the user is not in your database, call done with `false`
    done(null, profile);
}

passport.use(new OAuthGoogleStrategy(AUTH_OPTIONS, verifyCallback));

const app = express();

app.use(passport.initialize());
app.use(express.json());

app.use("/v1", apiRouter);

export { app };
