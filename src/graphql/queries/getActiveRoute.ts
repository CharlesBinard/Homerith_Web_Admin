import gql from 'graphql-tag';

export const GET_ACTIVE_ROUTE = gql`
  query GetActiveRoute {
    activeRoute @client(always: true) {
      name
      parentHref
      parentAs
    }
  }
`;

export default GET_ACTIVE_ROUTE;
