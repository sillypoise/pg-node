import type { ResolverFn } from "@graphql-yoga/node";
import {
    getAllBooks,
    getBookById,
    getBooksByPrice,
    addNewBookReviewModel,
} from "./books.model";

let bookResolvers = {
    Query: {
        book: (_obj: any, args: { id: number }) => {
            return getBookById(args.id);
        },
        books: (_obj: any) => {
            return getAllBooks();
        },
        booksByPrice: (
            _obj: any,
            args: { minPrice: number; maxPrice: number }
        ) => {
            return getBooksByPrice(args.minPrice, args.maxPrice);
        },
    },
    Mutation: {
        addNewBookReview: (_obj: any, args: { id: number; rating: number }) => {
            return addNewBookReviewModel(args.id, args.rating);
        },
    },
};

export default bookResolvers;
