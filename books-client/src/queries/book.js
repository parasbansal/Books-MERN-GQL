import { gql } from 'apollo-boost';


const getBookList = gql`
  {
    books{
      _id
      name
      genre
      author{
        name
      }
    }
  }
`;

const addBookQuery = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      _id
      name
      genre
    }
  }
`;

export {
  getBookList,
  addBookQuery
}