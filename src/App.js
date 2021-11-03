import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Search from './Search'
import Dashboard from './Dashboard'

class BooksApp extends React.Component {
  state = {
        allBooks: [],
        booksByShelf: new Map()
  }

  componentDidMount() {
    this.refreshAllBooks();
  }

  refreshAllBooks = () => {
    BooksAPI.getAll()
        .then((allBooks) => {
          this.setState(() => ({
              allBooks: allBooks,
              booksByShelf: this.getBooksByShelf(allBooks)
          }))
        });
  }

  updateBookShelf = (book, shelf, refresh) => {
    BooksAPI.update(book, shelf)
        .then(() => {
          refresh && this.refreshAllBooks();
        });
  }

  getBooksByShelf = (allBooks) => {
      const booksByShelf = new Map();
      allBooks.forEach((book) => {
          booksByShelf.set(book.id, book.shelf);
      });
      return booksByShelf;
  }

  render() {
    return (
        <div className="app">
          <Route exact path='/search' render={() => (<Search updateBookShelf={this.updateBookShelf} booksByShelf={this.state.booksByShelf}/>)} />
          <Route exact path='/' render={() => {
              this.refreshAllBooks();
              return (<Dashboard allBooks={this.state.allBooks} updateBookShelf={this.updateBookShelf}/>)
          }} />
        </div>
    )
  }
}

export default BooksApp
