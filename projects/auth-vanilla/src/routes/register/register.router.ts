import express from "express";

import { httpRegister } from "./register.controller";

let registerRouter = express.Router();

registerRouter.post("/", httpRegister);

export { registerRouter };
