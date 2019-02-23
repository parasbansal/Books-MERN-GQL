import React, { Component } from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/books/book-list/BookList';
import AddBook from './components/books/add-book/AddBook';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="container">
            <AddBook />
            <BookList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
