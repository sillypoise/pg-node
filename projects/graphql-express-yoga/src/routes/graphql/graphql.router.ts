import express from "express";
import { graphQLServer } from "./graphql.controller";

let graphqlRouter = express.Router();

graphqlRouter.use("/", graphQLServer);

export { graphqlRouter };
