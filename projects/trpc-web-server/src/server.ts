import dotenv from "dotenv";
// import { createServer, IncomingMessage, ServerResponse } from "http";
import * as trpc from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { users } from "./routes/users/users.router";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

type Context = {};

// Routes

let hello = trpc.router<Context>().query("world", {
    resolve() {
        return "hello 🌎";
    },
});

let appRouter = trpc
    .router<Context>()
    .merge("hello.", hello)
    .merge("user.", users);

console.log(`🚀 Up and running at port: ${PORT}`);
// server.listen(PORT);

export type AppRouter = typeof appRouter;

let { server, listen } = createHTTPServer({
    router: appRouter,
    createContext() {
        return {};
    },
});

listen(Number(PORT));
