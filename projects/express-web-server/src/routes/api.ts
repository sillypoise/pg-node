import express from "express";
import { barRouter } from "./bar/bar.router";
import { fooRouter } from "./foo/foo.router";

let api = express.Router();

api.use("/foo", fooRouter);
api.use("/bar", barRouter);

export { api };
