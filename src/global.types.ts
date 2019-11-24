import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
 **/
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
  Date: any,
};


export type ActiveRoute = {
   __typename?: 'activeRoute',
  name?: Maybe<Scalars['String']>,
  parentHref?: Maybe<Scalars['String']>,
  parentAs?: Maybe<Scalars['String']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}



export type Message = {
   __typename?: 'Message',
  id: Scalars['ID'],
  text: Scalars['String'],
  createdAt: Scalars['DateTime'],
  user: User,
};

export type MessageConnection = {
   __typename?: 'MessageConnection',
  edges: Array<Message>,
  pageInfo: PageInfo,
};

export type MessageCreated = {
   __typename?: 'MessageCreated',
  message: Message,
};

export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  signUp: Token,
  signIn: Token,
  updateUser: User,
  deleteUser: Scalars['Boolean'],
  createMessage: Message,
  deleteMessage: Scalars['Boolean'],
  createTeam: Team,
  deleteTeam: Scalars['Boolean'],
  createScore: Score,
  deleteScore: Scalars['Boolean'],
};


export type MutationSignUpArgs = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignInArgs = {
  login: Scalars['String'],
  password: Scalars['String']
};


export type MutationUpdateUserArgs = {
  username: Scalars['String']
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationCreateMessageArgs = {
  text: Scalars['String']
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID']
};


export type MutationCreateTeamArgs = {
  name: Scalars['String'],
  logo?: Maybe<Scalars['Upload']>
};


export type MutationDeleteTeamArgs = {
  id: Scalars['ID']
};


export type MutationCreateScoreArgs = {
  victoryPoint: Scalars['Int'],
  looserPoint: Scalars['Int'],
  victoryTeam: Scalars['ID'],
  looserTeam: Scalars['ID']
};


export type MutationDeleteScoreArgs = {
  id: Scalars['ID']
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  users?: Maybe<Array<User>>,
  user?: Maybe<User>,
  me?: Maybe<User>,
  messages: MessageConnection,
  message: Message,
  teams: TeamConnection,
  team: Team,
  scores: ScoreConnection,
  score: Score,
  activeRoute?: Maybe<ActiveRoute>,
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryMessagesArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMessageArgs = {
  id: Scalars['ID']
};


export type QueryTeamsArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryTeamArgs = {
  id: Scalars['ID']
};


export type QueryScoresArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryScoreArgs = {
  id: Scalars['ID']
};

export type Score = {
   __typename?: 'Score',
  id: Scalars['ID'],
  victoryPoint: Scalars['Int'],
  looserPoint: Scalars['Int'],
  victoryTeam: Team,
  looserTeam: Team,
};

export type ScoreConnection = {
   __typename?: 'ScoreConnection',
  edges?: Maybe<Array<Score>>,
  pageInfo: PageInfo,
};

export type Subscription = {
   __typename?: 'Subscription',
  _?: Maybe<Scalars['Boolean']>,
  messageCreated: MessageCreated,
};

export type Team = {
   __typename?: 'Team',
  id: Scalars['ID'],
  name: Scalars['String'],
  logo: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
};

export type TeamConnection = {
   __typename?: 'TeamConnection',
  edges?: Maybe<Array<Team>>,
  pageInfo: PageInfo,
};

export type Token = {
   __typename?: 'Token',
  token: Scalars['String'],
};


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
  email: Scalars['String'],
  role?: Maybe<Scalars['String']>,
  messages?: Maybe<Array<Message>>,
};

export type AddTeamMutationVariables = {
  name: Scalars['String'],
  logo?: Maybe<Scalars['Upload']>
};


export type AddTeamMutation = (
  { __typename?: 'Mutation' }
  & { createTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name' | 'logo'>
  ) }
);

export type GetActiveRouteQueryVariables = {};


export type GetActiveRouteQuery = (
  { __typename?: 'Query' }
  & { activeRoute: Maybe<(
    { __typename?: 'activeRoute' }
    & Pick<ActiveRoute, 'name' | 'parentHref' | 'parentAs'>
  )> }
);

export type GetTeamsQueryVariables = {};


export type GetTeamsQuery = (
  { __typename?: 'Query' }
  & { teams: (
    { __typename?: 'TeamConnection' }
    & { edges: Maybe<Array<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name' | 'logo' | 'createdAt'>
    )>> }
  ) }
);


export const AddTeamDocument = gql`
    mutation AddTeam($name: String!, $logo: Upload) {
  createTeam(name: $name, logo: $logo) {
    id
    name
    logo
  }
}
    `;
export type AddTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTeamMutation, AddTeamMutationVariables>;
export const GetActiveRouteDocument = gql`
    query GetActiveRoute {
  activeRoute @client(always: true) {
    name
    parentHref
    parentAs
  }
}
    `;
export const GetTeamsDocument = gql`
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