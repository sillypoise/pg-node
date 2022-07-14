import express from "express";

import { httpWriteBar } from "./bar.controller";

let barRouter = express.Router();

barRouter.post("/", httpWriteBar);

export { barRouter };
