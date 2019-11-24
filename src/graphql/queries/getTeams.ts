import gql from 'graphql-tag';

export const GET_TEAMS = gql`
  query GetTeams {
    teams {
      edges {
        id
        name
        logo
        createdAt
      }
    }
  }
`;

export default GET_TEAMS;
