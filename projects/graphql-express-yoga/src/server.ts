import dotenv from "dotenv";
import { createServer } from "http";
import { app } from "./app";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let server = createServer(app);

console.log(`🚀 GraphQL server up and running at: ${PORT}/graphql`);
server.listen(PORT);
