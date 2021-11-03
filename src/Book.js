import React, {Component} from 'react'

class Book extends Component {
    render() {
        const { title, authors, imageLinks, shelf} = this.props.book;

        const bookCoverStyle = {
            backgroundImage: `url("${imageLinks && imageLinks.smallThumbnail ? imageLinks.smallThumbnail : ''}")`,
            width: 128,
            height: 193
        }

        const updateBook = (event) => {
            event.preventDefault();
            const newShelve = event.target.value;
            const book = this.props.book;
            if(newShelve !== book.shelve) {
                console.log(book);
                book.shelve = newShelve;
                console.log(book);
                this.props.updateBookShelf(book, newShelve, true);
            }
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={bookCoverStyle}></div>
                        <div className="book-shelf-changer">
                            <select value={shelf || 'none'} onChange={updateBook}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors && authors.length >0 ? authors.join(' & ') : ''}</div>
                </div>
            </li>
        );
    }
}

export default Book;