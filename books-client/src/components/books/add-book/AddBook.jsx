import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { addBookQuery, getBookList } from '../../../queries/book';
import { getAuthorList } from '../../../queries/author';

const styles = theme => ({
  dropdown: {
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class AddBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      genre: "",
      authorId: ""
    }

    this.handleAddBook = this.handleAddBook.bind(this);
  }

  handleAddBook(e) {
    e.preventDefault();
    this.props.addBookQuery({
      variables: {
        name: this.state.bookName,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBookList }]
    })
  }

  renderAuthors() {
    const authorsData = this.props.authorsData;
    const { classes } = this.props;
    console.log(this.props);

    if (authorsData.loading) {
      return (
        <div className="loading">Loading Authors</div>
      );
    }
    return (
      <TextField
        id="standard-select-author"
        select
        label="Author"
        className={classes.dropdown}
        value={this.state.authorId}
        onChange={(e) => { this.setState({ authorId: e.target.value }) }}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {authorsData.authors.map(author => (
          <MenuItem key={author._id} value={author._id}>
            {author.name}
          </MenuItem>
        ))}
      </TextField>
    )
  }

  render() {
    return (
      <div className="AddBook">
        <Paper className="paper" elevation={1}>
          <Typography variant="h5" component="h3">
            Add new Book
          </Typography>
          <form noValidate autoComplete="off">
            <Grid container spacing={16} justify="center" alignItems="center">
              <Grid item xs={3}>
                <TextField
                  id="standard-name"
                  label="Book Name"
                  value={this.state.bookName}
                  onChange={(e) => { this.setState({ bookName: e.target.value }) }}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="standard-genre"
                  label="Genre"
                  value={this.state.genre}
                  onChange={(e) => { this.setState({ genre: e.target.value }) }}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={3}>
                {this.renderAuthors()}
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={(e) => this.handleAddBook(e)}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    );
  }
}

AddBook.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, { name: "styles" }),
  graphql(getAuthorList, { name: "authorsData" }),
  graphql(addBookQuery, { name: "addBookQuery" }),
)(AddBook);