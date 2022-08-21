import {useEffect, useState} from "react";
import BookListComponent from "./BookListComponent";
import moment from "moment";

//Logic layer of book list
const BookListContainer = () => {
        const [loading, setLoading] = useState(null);
        const [errorMessage, setErrorMessage] = useState(null);
        const [booksDefault, setBooksDefault] = useState(null);
        const [books, setBooks] = useState(null);

        //fetching API on first render and setting the same result to "booksDefault" and "books" array
        useEffect(() => {
            let canFetch = true
            setLoading(true);
            fetch("/getextracts?titlecontains=s")
                .then((response) => response.json())
                .then((data) => {
                    if (canFetch) {
                        setBooksDefault(data.Extracts);
                        setBooks(data.Extracts);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    setErrorMessage(error);
                    setLoading(false);
                });
            return () => {
                canFetch = false
            }
        }, []);

        const handleSortAscending = (col) => {
            const sortedBooks = [...books].sort((a, b) => {
                if (typeof a[col] === "number" && typeof b[col] === "number") {
                    return a[col] > b[col] ? 1 : -1;
                }
                return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
            });
            setBooks(sortedBooks);
        }

        const handleSortDescending = (col) => {
            const sortedBooks = [...books].sort((a, b) => {
                if (typeof a[col] === "number" && typeof b[col] === "number") {
                    return a[col] < b[col] ? 1 : -1;
                }
                return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
            });
            setBooks(sortedBooks)
        }

        const handleSortReset = () => {
            setBooks(booksDefault);
        }

        const formatDate = (date) => {
            return moment(date).format("MM/DD/YY")
        }

        return (
            <BookListComponent
                loading={loading}
                errorMessage={errorMessage}
                books={books}
                formatDate={(date) => formatDate(date)}
                onSortAsc={(col) => handleSortAscending(col)}
                onSortDesc={(col) => handleSortDescending(col)}
                onSortReset={handleSortReset}
            />
        );
    }
;

export default BookListContainer;
