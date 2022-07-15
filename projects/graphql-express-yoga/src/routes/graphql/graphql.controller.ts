import { join } from "path";
import { createServer } from "@graphql-yoga/node";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";

//* This looks for '*.graphql' files in 'src'!
let typesArray = loadFilesSync(
    join(process.cwd(), "/src/graphql/**/*.graphql")
);

//* This looks for '*.resolvers.js' files in 'dist'! Note 'js', not 'ts'!
let resolversArray = loadFilesSync(
    join(__dirname, "../../graphql/**/*.resolvers.js")
);

let schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
});

let graphQLServer = createServer({
    schema: schema,
    logging: false,
    graphiql: true,
});

export { graphQLServer };
