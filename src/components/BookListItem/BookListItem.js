const BookListItem = ({number, cover, author, biography, title, estimatedReadingTimeMinutes, publicationDate, isbn}) => {

    return (
        <div className="book-list-item">
            <div className="table-cell">
                <div className="book-list-item__number">{number}.</div>
            </div>
            <div className="table-cell width-10">
                {cover && (
                    <div className="book-list-item__cover-wrapper">
                        <a className="book-list-item__link-overlay" href={`https://extracts.panmacmillan.com/extract?isbn=${isbn}`} target="_blank"/>
                        <img src={cover} alt={title} className="book-list-item__cover"/>
                    </div>
                )}
                {!cover && (
                    <div className="text-center">No cover</div>
                )}
            </div>
            <div className="table-cell width-10">
                <h3 className="book-list-item__author heading">{author}</h3>
            </div>
            <div className="table-cell width-30 height-full">
                <div className="book-list-item__biography" dangerouslySetInnerHTML={{__html: biography}}/>
            </div>
            <div className="table-cell width-10 align-left">
                <a href={`https://extracts.panmacmillan.com/extract?isbn=${isbn}`} target="_blank">
                    <h4 className="book-list-item__title">{title}</h4>
                </a>
            </div>
            <div className="table-cell width-10">
                <span className="book-list-item__reading-time">{estimatedReadingTimeMinutes} min</span>
            </div>
            <div className="table-cell width-10">
                <span className="">{publicationDate}</span>
            </div>
        </div>
    );
};

export default BookListItem;
