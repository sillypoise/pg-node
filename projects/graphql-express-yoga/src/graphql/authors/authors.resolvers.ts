import type { ResolverFn } from "@graphql-yoga/node";
import { getAllAuthors, getAuthorById } from "./authors.model";

let authorsResolvers = {
    Query: {
        author: (_parent: any, args: { id: number }) => {
            return getAuthorById(args.id);
        },
        authors: () => {
            return getAllAuthors();
        },
    },
};

export default authorsResolvers;
