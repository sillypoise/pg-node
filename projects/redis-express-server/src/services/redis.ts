import { createClient } from "redis";

let REDIS_URL = process.env["REDIS_URL"] || "";

let rdb = createClient({ url: REDIS_URL });

rdb.on("error", (err) => console.log("Redis Client error: ", err));

async function redisConnect() {
    await rdb.connect();
}

async function redisDisconnect() {
    await rdb.quit();
}

export { rdb, redisConnect, redisDisconnect };
