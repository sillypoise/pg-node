import dotenv from "dotenv";
import { createServer, IncomingMessage, ServerResponse } from "http";
import * as trpc from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { router } from "@trpc/server";
import { createContext } from "vm";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let appRouter = trpc.router().query("getUser", {
    input: (val: unknown) => {
        if (typeof val !== "string")
            throw new Error(`Invalid input: ${typeof val}`);
        return val;
    },
    async resolve(req) {
        req.input;
        return { id: req.input, name: "Bilbo" };
    },
});

console.log(`🚀 Up and running at port: ${PORT}`);
// server.listen(PORT);

export type AppRouter = typeof appRouter;

let { server, listen } = createHTTPServer({
    router: appRouter,
    createContext() {
        return {};
    },
});
