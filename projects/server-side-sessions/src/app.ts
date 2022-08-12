import dotenv from "dotenv";
import express from "express";

import { api } from "./routes/api";

dotenv.config();

let app = express();

app.use(express.json());

app.use("/v1", api);

export { app };
