import gql from 'graphql-tag';
import activeRouteTypeDef from './activeRoute';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, activeRouteTypeDef];
