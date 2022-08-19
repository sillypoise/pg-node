import express from "express";
import passport from "passport";

import { apiRouter } from "./routes/api";
import { passportGoogleOAuth } from "./util/passport/googleOAuth.strategy";

const app = express();

passportGoogleOAuth();

app.use(passport.initialize());
app.use(express.json());

app.use("/v1", apiRouter);

export { app };
