import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import SearchButton from './SearchButton'
import Header from './Header'

class Dashboard extends Component {
    render() {
        return (
            <div className="list-books">
                <Header title={'MyReads'} />
                <Bookshelf allBooks={this.props.allBooks} updateBookShelf={this.props.updateBookShelf}/>
                <SearchButton />
            </div>
        );
    }
}

export default Dashboard;