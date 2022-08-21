import BookListItem from "../BookListItem/BookListItem";
import SortButton from "../SortButton/SortButton";
import ContentContainer from "../ContentContainer/ContentContainer";

const BookListComponent = ({
                               loading,
                               books,
                               formatDate,
                               onSortAsc,
                               onSortDesc,
                               onResetClick,
                               errorMessage,
                           }) => {
    return (
        <>
            {loading && (
                <div className="loading">
                    <h1 className="loading-text">Loading...</h1>
                </div>
            )}
            {!loading && (
                <div className="book-list">
                    {errorMessage && (
                        <div>
                            {errorMessage}
                        </div>
                    )}
                    <ContentContainer>
                        <div className="book-list-headers">
                            <div className="book-list-header table-cell visible-desktop">
                                <span className="book-list-header-text">Nr.</span>
                            </div>
                            <div className="book-list-header table-cell width-10 visible-desktop">
                                <span className="book-list-header-text">Cover</span>
                            </div>
                            <div className="book-list-header table-cell width-10">
                                <span className="book-list-header-text ">Author</span>
                                <SortButton onAscClick={() => onSortAsc("author")}
                                            onDescClick={() => onSortDesc("author")}
                                            onResetClick={onResetClick}/>
                            </div>
                            <span className="book-list-header table-cell width-30 visible-desktop">Biography</span>
                            <div className="book-list-header table-cell width-10">
                                <span className="book-list-header-text">Title</span>
                                <SortButton onAscClick={() => onSortAsc("title")}
                                            onDescClick={() => onSortDesc("title")}
                                            onResetClick={onResetClick}/>
                            </div>
                            <div className="book-list-header table-cell width-10">
                                <span className="book-list-header-text">Reading time</span>
                                <SortButton onAscClick={() => onSortAsc("estimatedReadingTimeMinutes")}
                                            onDescClick={() => onSortDesc("estimatedReadingTimeMinutes")}
                                            onResetClick={onResetClick}/>
                            </div>
                            <div className="book-list-header table-cell width-10">
                                <span className="book-list-header-text">Publication date</span>
                                <SortButton onAscClick={() => onSortAsc("publicationDate")}
                                            onDescClick={() => onSortDesc("publicationDate")}
                                            onResetClick={onResetClick}/>
                            </div>
                        </div>
                        <div className="book-list-items">
                            {books?.length > 0 &&
                            books.map((book, index) => {
                                return (
                                    <BookListItem
                                        key={index + "_" + book.isbn}
                                        number={index + 1}
                                        cover={book.jacketUrl}
                                        author={book.author}
                                        biography={book.authorBiography}
                                        title={book.title}
                                        estimatedReadingTimeMinutes={book.estimatedReadingTimeMinutes}
                                        publicationDate={formatDate(book.publicationDate)}
                                        isbn={book.isbn}
                                    />
                                );
                            })}
                        </div>
                        {books?.length === 0 && (
                            <div className="not-found">No books found.</div>
                        )}
                    </ContentContainer>
                </div>
            )}
        </>
    );
};

export default BookListComponent;
