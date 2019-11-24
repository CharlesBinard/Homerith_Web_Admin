import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    activeRoute: activeRoute
  }

  type activeRoute {
    name: String
    parentHref: String
    parentAs: String
  }
`;

export default typeDefs;
