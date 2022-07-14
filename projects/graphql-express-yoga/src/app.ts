import express from "express";
import { graphqlRouter } from "./routes/graphql/graphql.router";

let app = express();

app.use("/graphql", graphqlRouter);

export { app };
