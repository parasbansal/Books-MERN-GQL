import { gql } from 'apollo-boost';

const getAuthorList = gql`
  {
    authors{
      _id
      name
    }
  }
`;

export {
  getAuthorList
}