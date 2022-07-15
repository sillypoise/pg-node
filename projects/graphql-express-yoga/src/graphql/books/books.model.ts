import type { BookData, BooksDataArray } from "../../types";

// * Mock book DB
const books: BooksDataArray = [
    {
        id: 10,
        title: "Harry Potter 1",
        author: {
            id: 1,
            name: "JK Rowling",
            books: [
                {
                    id: 10,
                    title: "Harry Potter 1",
                    author: "JK Rowling",
                    isLoaned: false,
                    price: 9.99,
                    cover: "hardcover",
                    reviews: [],
                },
                {
                    id: 11,
                    title: "Harry Potter 2",
                    author: "JK Rowling",
                    isLoaned: false,
                    price: 9.99,
                    cover: "softcover",
                    reviews: [],
                },
            ],
        },
        isLoaned: false,
        price: 9.99,
        cover: "hardcover",
        reviews: [],
    },
    {
        id: 11,
        title: "Harry Potter 2",
        author: {
            id: 1,
            name: "JK Rowling",
            books: [
                {
                    id: 10,
                    title: "Harry Potter 1",
                    author: "JK Rowling",
                    isLoaned: false,
                    price: 9.99,
                    cover: "hardcover",
                    reviews: [],
                },
                {
                    id: 11,
                    title: "Harry Potter 2",
                    author: "JK Rowling",
                    isLoaned: false,
                    price: 9.99,
                    cover: "softcover",
                    reviews: [],
                },
            ],
        },
        isLoaned: false,
        price: 9.99,
        cover: "softcover",
        reviews: [],
    },
    {
        id: 12,
        title: "Rayuela",
        author: {
            id: 2,
            name: "Julio Cortazar",
            books: [
                {
                    id: 12,
                    title: "Rayuela",
                    author: "Julio Cortazar",
                    isLoaned: false,
                    price: 15.99,
                    cover: "softcover",
                    reviews: [],
                },
            ],
        },
        isLoaned: false,
        price: 15.99,
        cover: "softcover",
        reviews: [],
    },
];

// * Data Modeling Functions, real-life scenario they would perform async ops like requesting to other services
async function getAllBooks(): Promise<BooksDataArray> {
    let booksArray = await [...books];
    return booksArray;
}

async function getBookById(id: number): Promise<BookData | undefined> {
    let booksArray = await [...books];
    return booksArray.find((book) => book.id === Number(id));
}

async function getBooksByPrice(
    min: number,
    max: number
): Promise<BooksDataArray> {
    let booksArray = await [...books];
    return booksArray.filter((book) => book.price >= min && book.price <= max);
}

/**
 ** Sometimes there can be name collisions with resolver names
 ** Notice we had to add 'Model' to prevent collision when importing in resolvers file
 */

async function addNewBookReviewModel(
    id: number,
    rating: number
): Promise<BookData | void> {
    let book = await getBookById(id);
    if (book) {
        book.reviews.push(rating);
        return book;
    }
}

export { getAllBooks, getBookById, getBooksByPrice, addNewBookReviewModel };
