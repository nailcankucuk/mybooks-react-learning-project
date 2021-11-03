import React, {Component} from 'react'
import Shelf from './Shelf'
import * as CollectionUtil from './CollectionUtil'

class Bookshelf extends Component {
    render() {
        const { allBooks, updateBookShelf } = this.props;
        const groupedBooks = CollectionUtil.groupBy(allBooks, "shelf");

        return (
            <div className="list-books-content">
                <Shelf books={groupedBooks.currentlyReading} updateBookShelf={updateBookShelf} shelfTitle='Currently Reading'/>
                <Shelf books={groupedBooks.wantToRead} updateBookShelf={updateBookShelf} shelfTitle='Want To Read'/>
                <Shelf books={groupedBooks.read} updateBookShelf={updateBookShelf} shelfTitle='Read'/>
            </div>
        );
    }
}

export default Bookshelf;