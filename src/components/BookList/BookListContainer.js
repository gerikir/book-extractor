import {useEffect, useState} from "react";
import BookListComponent from "./BookListComponent";
import moment from "moment";

const BookListContainer = () => {
        const [loading, setLoading] = useState(null);
        const [errorMessage, setErrorMessage] = useState(null);
        const [booksDefault, setBooksDefault] = useState([]);
        const [books, setBooks] = useState([]);

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

        const handleSortAsc = (col) => {
            const sortedBooks = [...books].sort((a, b) => {
                if (typeof a[col] === "number" && typeof b[col] === "number") {
                    return a[col] > b[col] ? 1 : -1;
                }
                return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
            });
            setBooks(sortedBooks);
        }

        const handleSortDesc = (col) => {
            const sortedBooks = [...books].sort((a, b) => {
                if (typeof a[col] === "number" && typeof b[col] === "number") {
                    return a[col] < b[col] ? 1 : -1;
                }
                return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
            });
            setBooks(sortedBooks)
        }

        const handleReset = () => {
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
                onSortAsc={(col) => handleSortAsc(col)}
                onSortDesc={(col) => handleSortDesc(col)}
                onResetClick={handleReset}
            />
        );
    }
;

export default BookListContainer;
