import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {
    render() {
        const { books, shelfTitle, updateBookShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map((book, index) => (<Book book={book} key={index} updateBookShelf={updateBookShelf}/>))}
                        {!books && <p>There are no books on this shelf</p>}
                    </ol>
                </div>
            </div>
        );
    }
}


export default Shelf;