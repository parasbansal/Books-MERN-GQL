import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { getBookList } from '../../../queries/book';


class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderBookList = () => {
    let data = this.props.data;
    if (data.loading) {
      return (
        <TableRow>
          <TableCell><div className="loading">loading books...</div></TableCell>
        </TableRow>
      )
    } else {
      return data.books.map(book => (
        <TableRow key={book._id}>
          <TableCell component="th" scope="row">{book.name}</TableCell>
          <TableCell>{book.genre}</TableCell>
          <TableCell>{book.author.name}</TableCell>
        </TableRow>
      ));
    }
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="BookList">
        <Paper className="paper">
          <Typography variant="h5" component="h3">Books</Typography>
          <div className="separator"></div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Book Name</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Author</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderBookList()}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default graphql(getBookList)(BookList);