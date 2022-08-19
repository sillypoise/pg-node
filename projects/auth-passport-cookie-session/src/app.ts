import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";

import { config } from "./util/appConfig";
import { apiRouter } from "./routes/api";
import { passportGoogleOAuth } from "./util/passport/googleOAuth.strategy";

const app = express();

passportGoogleOAuth();

app.use(
    cookieSession({
        name: "sesh",
        maxAge: 24 * 60 * 60 * 1000,
        keys: [config.COOkIE_SECRET_1, config.COOKIE_SECRET_2],
        httpOnly: true,
        secure: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use("/v1", apiRouter);

export { app };
