import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";

import { config } from "./util/appConfig";
import { apiRouter } from "./routes/api";
import { passportGoogleOAuth } from "./util/passport/googleOAuth.strategy";

const app = express();

passportGoogleOAuth();

// Passport populate the user object with the Google profile info we choose to keep
passport.serializeUser((user, done) => {
    console.log("serializeUser", user);
    done(null, user);
});

// Passport read the session of incoming request and places the user object on req.user
passport.deserializeUser((user: Express.User, done) => {
    console.log("deserializeUser", user);
    done(null, user);
});

app.use(
    cookieSession({
        name: "sesh",
        maxAge: 24 * 60 * 60 * 1000,
        keys: [config.COOkIE_SECRET_1, config.COOKIE_SECRET_2],
        secure: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use("/v1", apiRouter);

export { app };
