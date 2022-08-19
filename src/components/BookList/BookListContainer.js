import {useEffect, useState} from "react";
import {builder} from "../../utils/builder";
import BookListComponent from "./BookListComponent";
import moment from "moment";

const BookListContainer = () => {
        const [books, setBooks] = useState(null);
        const [loading, setLoading] = useState(null);
        const [bookName, setBookName] = useState("");
        const [errorMessage, setErrorMessage] = useState(null);

        useEffect(() => {
            let canFetch = true
            setLoading(true);
            fetch("/getextracts?titlecontains=s")
                .then((response) => response.json())
                .then((data) => {
                    if (canFetch) {
                        setBooks(data.Extracts);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
            return () => {
                canFetch = false
            }
        }, []);

        const filter = () => {
            const searchParams = builder()
                .with("title", bookName)
                .build();

            // fetchBooks(searchParams).then((bookData) => {
            //   setBooks(bookData);
            // });
        };

        const handleBookNameInputChange = (text) => {
            setBookName(text);
        };

        const handleFilterClick = () => {
            // filter();
        };

        const formatDate = (date) => {
            return moment(date).format("MMM. DD, YYYY")
        }

        return (
            <BookListComponent
                loading={loading}
                errorMessage={errorMessage}
                books={books}
                bookName={bookName}
                formatDate={(date) => formatDate(date)}
                onBookNameInputChange={handleBookNameInputChange}
                onFilterClick={handleFilterClick}
            />
        );
    }
;

export default BookListContainer;
