import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Search from './Search'
import Dashboard from './Dashboard'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    this.refreshAllBooks();
  }

  refreshAllBooks = () => {
    BooksAPI.getAll()
        .then((allBooks) => {
          this.setState(() => ({allBooks}))
        });
  }

  updateBookShelf = (book, shelf, refresh) => {
    BooksAPI.update(book, shelf)
        .then((res) => {
          refresh && this.refreshAllBooks();
        });

  }

  render() {
    return (
        <div className="app">
          <Route exact path='/search' render={() => (<Search updateBookShelf={this.updateBookShelf}/>)} />
          <Route exact path='/' render={() => (<Dashboard allBooks={this.state.allBooks} updateBookShelf={this.updateBookShelf}/>)} />
        </div>
    )
  }
}

export default BooksApp
