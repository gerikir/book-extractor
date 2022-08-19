const BookListItem = ({number, cover, author, biography, title, estimatedReadingTimeMinutes, publicationDate, isbn}) => {

    return (
        <tr
            className="book-list-item"
        >
            <td className="book-list-item-cell extra-narrow">
                <div className="book-list-item__number">{number}.</div>
            </td>
            <td className="book-list-item-cell width-10">
                {cover && (
                    <div className="book-list-item__cover-wrapper">
                        <a className="book-list-item__link-overlay" href={`https://extracts.panmacmillan.com/extract?isbn=${isbn}`} target="_blank"/>
                        <img src={cover} alt={title} className="book-list-item__cover"/>
                    </div>
                )}
                {!cover && (
                    <div className="text-center">No cover</div>
                )}
            </td>
            <td className="book-list-item-cell width-20">
                <h3 className="book-list-item__author heading">{author}</h3>
            </td>
            <td className="book-list-item-cell width-40 height-full">
                <div className="book-list-item__biography" dangerouslySetInnerHTML={{__html: biography}}/>
            </td>
            <td className="book-list-item-cell width-20">
                <a className="book-list-item__link-overlay" href={`https://extracts.panmacmillan.com/extract?isbn=${isbn}`} target="_blank">
                <h4 className="book-list-item__title">{title}</h4>
                </a>
            </td>
            <td className="book-list-item-cell width-5">
                <span className="book-list-item__reading-time">{estimatedReadingTimeMinutes} min</span>
            </td>
            <td className="book-list-item-cell width-10">
                <span className="">{publicationDate}</span>
            </td>
        </tr>
    );
};

export default BookListItem;
