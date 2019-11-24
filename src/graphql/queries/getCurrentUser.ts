import gql from 'graphql-tag';

// TODO: Set-up your real user query here
const GET_CURRENT_USER = gql`
  query me {
    me {
      id
    }
  }
`;

export { GET_CURRENT_USER };
