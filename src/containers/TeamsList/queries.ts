import gql from 'graphql-tag';

export const GET_TEAMS = gql`
  query GetTeams {
    teams {
      edges {
        id
        name
        logo
      }
    }
  }
`;

export default GET_TEAMS;
