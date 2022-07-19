import { z } from "zod";

// Mock DB
let usersArray = [
    {
        id: 1,
        name: "John",
        age: 18,
        profilePicture: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        name: "Jane",
        age: 19,
        profilePicture: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        name: "Bob",
        age: 20,
        profilePicture: "https://picsum.photos/200/300",
    },
];

import * as trpc from "@trpc/server";
import { json } from "stream/consumers";
type Context = {};

let users = trpc
    .router<Context>()
    .query("list", {
        resolve() {
            return usersArray;
        },
    })
    .query("get", {
        input(val: unknown) {
            if (typeof val !== "number")
                throw new Error(`Invalid input: ${typeof val}`);
            return val;
        },
        resolve(req) {
            return usersArray.find((user) => user.id === req.input);
        },
    })
    .mutation("create", {
        input: z.object({
            id: z.number(),
            name: z.string(),
            age: z.number(),
            profilePicture: z.string(),
        }),
        resolve(req) {
            usersArray.push(req.input);
            console.log("✅", usersArray);
            return usersArray.at(-1);
        },
    });

export { users };
