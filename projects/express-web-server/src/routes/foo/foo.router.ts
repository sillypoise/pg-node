import express from "express";
import { httpGetFoo } from "./foo.controller";

let fooRouter = express.Router();

fooRouter.get("/", httpGetFoo);

export { fooRouter };
