import { createServer } from "@graphql-yoga/node";

let graphQLServer = createServer({
    schema: {
        typeDefs: `
            type Query {
                hello: String
            }
        `,
        resolvers: {
            Query: {
                hello: () => "world",
            },
        },
    },
    logging: false,
    graphiql: true,
});

export { graphQLServer };
