// import BookListItem from "../BookListItem/BookListItem";
import ContentContainer from "../ContentContainer/ContentContainer";
import BookListItem from "../BookListItem/BookListItem";

const BookListComponent = ({
  loading,
  books,
                             formatDate,
  bookName,
  bookAbvMin,
  bookAbvMax,
  onBookNameInputChange,
  onBookAbvMinInputChange,
  onBookAbvMaxInputChange,
  onFilterClick,
  onCardClick,
  onCardKeyDown,
  errorMessage,
}) => {
  console.log(books)
  return (
    <>
      {loading && (
        <div className="loading">
          <h1 className="loading-text">Loading...</h1>
        </div>
      )}
      {!loading && (
        <div className="book-list">
          <div className="content-container">
              {/*<div className="md:flex md:flex-1 md:justify-between">*/}
              {/*  <label className="flex items-center text-xl font-medium">*/}
              {/*    Name:*/}
              {/*    <input*/}
              {/*      id="bookName"*/}
              {/*      type="text"*/}
              {/*      value={bookName}*/}
              {/*      placeholder="Name"*/}
              {/*      onChange={(event) =>*/}
              {/*        onBookNameInputChange(event.target.value)*/}
              {/*      }*/}
              {/*      className="ml-4 h-12 w-full rounded-md border-2 border-solid border-grey-light p-2 text-xl"*/}
              {/*    />*/}
              {/*  </label>*/}
              {/*  <div className="mt-6 flex items-center md:mt-0 md:ml-10">*/}
              {/*    <label className="flex items-center text-xl font-medium">*/}
              {/*      ABV:*/}
              {/*      <input*/}
              {/*        id="bookAbvMin"*/}
              {/*        type="number"*/}
              {/*        value={bookAbvMin}*/}
              {/*        placeholder="0"*/}
              {/*        onChange={(event) =>*/}
              {/*          onBookAbvMinInputChange(event.target.value)*/}
              {/*        }*/}
              {/*        className="ml-9 mr-1 h-12 w-[70px] rounded-md border-2 border-solid border-grey-light p-2 text-xl md:ml-4"*/}
              {/*      />*/}
              {/*      %*/}
              {/*    </label>*/}
              {/*    <span className="mx-3">-</span>*/}
              {/*    <label className="flex items-center text-xl font-medium">*/}
              {/*      <input*/}
              {/*        id="bookAbvMax"*/}
              {/*        type="number"*/}
              {/*        value={bookAbvMax}*/}
              {/*        placeholder="100"*/}
              {/*        onChange={(event) =>*/}
              {/*          onBookAbvMaxInputChange(event.target.value)*/}
              {/*        }*/}
              {/*        className="ml-1 mr-1 h-12 w-[70px] rounded-md border-2 border-solid border-grey-light p-2 text-xl"*/}
              {/*      />*/}
              {/*      %*/}
              {/*    </label>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<button*/}
              {/*  onClick={onFilterClick}*/}
              {/*  className="mt-6 w-full min-w-[100px] self-end rounded-lg bg-brand-violet px-2 text-white duration-200 ease-in-out hover:opacity-90 sm:mt-0 sm:ml-6 sm:w-auto md:self-auto"*/}
              {/*>*/}
              {/*  <span className="h-10 font-bold leading-10 tracking-wider">*/}
              {/*    Filter*/}
              {/*  </span>*/}
              {/*</button>*/}

              {/*{errorMessage && (*/}
              {/*  <div className="absolute top-[54px] right-0 text-xs text-error">*/}
              {/*    {errorMessage}*/}
              {/*  </div>*/}
              {/*)}*/}
            <table className="book-list-items">
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
                      onClick={() => onCardClick(book.id)}
                      onKeyDown={(event) => onCardKeyDown(event, book.isbn)}
                    />
                  );
                })}
              {books?.length === 0 && (
                <div className="not-found">No books found</div>
              )}
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default BookListComponent;
