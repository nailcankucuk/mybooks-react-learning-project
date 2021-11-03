import React, {Component} from 'react'
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    state = {
        books: [
        ],
        query: ''
    }

    searchBooks = (event) => {
        let query = this.state.query;
        if (event && event.target.value !== undefined) {
            query = event.target.value;
            this.setState({
                query: query
            })
            event.preventDefault();
        }
        console.log(query);
        BooksAPI.search(query, 100)
            .then((books) => {
                console.log(books);
                books = (!books || books.error || (books && books.length === 0)) ? [] : books;
                this.setState({books: books});
                console.log(this.state.books);
            });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" onChange={this.searchBooks} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book, index) => (<Book key={index} book={book}
                                                                      updateBookShelf={(book, shelf, refresh) => {
                                                                          this.props.updateBookShelf(book, shelf, false);
                                                                          this.searchBooks();
                                                                      }}/>))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;