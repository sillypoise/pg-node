import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import { Strategy as OAuthGoogleStrategy } from "passport-google-oauth20";

import { config } from "./util/appConfig";
import { apiRouter } from "./routes/api";
import { passportGoogleOAuth } from "./util/passport/googleOAuth.strategy";
import helmet from "helmet";
import path from "path";

// passportGoogleOAuth();

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
    // Do whatever you want with the profile info you get back

    // Add your own logic here to check if the user is in your database
    // If the user is in your database, call done with the user object
    // Alternatively, you can just call done with `false` to make the user a new user
    // If the user is not in your database, call done with `false`
    done(null, profile);
}

// Re-declare the interface to include the new property
declare global {
    namespace Express {
        interface User {
            id: string;
        }
    }
}

passport.use(new OAuthGoogleStrategy(AUTH_OPTIONS, verifyCallback));

// Passport populate the user object with the Google profile info we choose to keep
passport.serializeUser((user, done) => {
    console.log("serializeUser", user.id);
    done(null, user.id);
});

// Passport read the session of incoming request and places the user object on req.user
passport.deserializeUser((id, done) => {
    done(null, id);
});

const app = express();

app.use(helmet());
app.use(
    cookieSession({
        name: "session",
        maxAge: 24 * 60 * 60 * 1000,
        keys: [config.COOkIE_SECRET_1, config.COOKIE_SECRET_2],
        secure: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

// app.use("/v1", apiRouter);

app.get("/v1/home", (req, res) => {
    console.log("🍪🍪🍪 ", req.user);
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/v1/auth/google", passport.authenticate("google"), (req, res) => {
    res.json("Authenticating with Google");
});

// Route for callback after authenticating with Google,
// must match the callback URL in the Google App settings
app.get(
    "/v1/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/v1/auth/google/failure",
        successRedirect: "/v1/home",
        session: true,
    }),
    (req, res) => {}
);

export { app };
