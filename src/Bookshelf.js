import React, {Component} from 'react'
import Shelve from './Shelve'
import * as CollectionUtil from './CollectionUtil'

class Bookshelf extends Component {
    render() {
        const { allBooks, updateBookShelf } = this.props;
        const groupedBooks = CollectionUtil.groupBy(allBooks, "shelf");

        return (
            <div className="list-books-content">
                <Shelve books={groupedBooks.currentlyReading} updateBookShelf={updateBookShelf} shelveTitle='Currently Reading'/>
                <Shelve books={groupedBooks.wantToRead} updateBookShelf={updateBookShelf} shelveTitle='Want To Read'/>
                <Shelve books={groupedBooks.read} updateBookShelf={updateBookShelf} shelveTitle='Read'/>
            </div>
        );
    }
}

export default Bookshelf;