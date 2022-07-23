import dotenv from "dotenv";
import { createServer } from "http";

import { app } from "./app";
import { rdb, redisConnect } from "./services/redis";

dotenv.config();

const PORT = process.env["PORT"] || 8000;

let server = createServer(app);

async function startServer() {
    // Connect to Redis
    await redisConnect();

    // Mock data
    await rdb.mSet([
        "user:1",
        "Joey",
        "user:2",
        "Chandler",
        "user:3",
        "Monica",
        "user:4",
        "Rachel",
        "user:5",
        "Phoebe",
        "user:6",
        "Ross",
    ]);

    server.listen(PORT, () => {
        console.log(`🚀 Up and running at port: ${PORT}`);
    });
}

startServer();
