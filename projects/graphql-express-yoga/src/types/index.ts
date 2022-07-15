type BooksDataArray = BookData[];

interface AuthorData {
    id: number;
    name: string;
    books: BookData[];
}

interface BookData {
    id: number;
    title: string;
    author: string | AuthorData;
    isLoaned: boolean;
    price: number;
    cover: string;
    reviews: number[];
}

export { AuthorData, BookData, BooksDataArray };
