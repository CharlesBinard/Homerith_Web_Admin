import gql from 'graphql-tag';

export const ADD_TEAM = gql`
  mutation AddTodo($name: String!, $logo: Upload) {
    createTeam(name: $name, logo: $logo) {
      id
      name
      logo
    }
  }
`;

export default ADD_TEAM;
