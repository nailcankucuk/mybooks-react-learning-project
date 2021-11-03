import React, {Component} from 'react'
import Book from './Book'

class Shelve extends Component {
    render() {
        const { books, shelveTitle, updateBookShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelveTitle}</h2>
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


export default Shelve;