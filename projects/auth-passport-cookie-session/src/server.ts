import dotenv from "dotenv";
import { readFileSync } from "fs";
import { createServer } from "https";

import { app } from "./app";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let server = createServer(
    {
        cert: readFileSync("cert.pem"),
        key: readFileSync("key.pem"),
    },
    app
);

async function startServer() {
    server.listen(PORT, () => {
        console.log(`🚀 Auth server up and running at port: ${PORT}`);
    });
}

startServer();
