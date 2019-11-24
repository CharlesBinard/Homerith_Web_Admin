import gql from 'graphql-tag';

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String, password: String) {
    signUp(username: $username, email: $email, password:$password) {
      token
    }
  }
`;

export default SIGN_UP;
