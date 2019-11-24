import { ApolloClient } from 'apollo-boost';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import cookie from 'js-cookie';
import { useQuery } from 'react-apollo';
import { GET_CURRENT_USER } from '../../graphql/queries/getCurrentUser';
import redirect from '../redirect';
export interface LogInVariables {
  email: string;
  password: string;
}

const useCurrentUserQuery = () => useQuery(GET_CURRENT_USER);

const signup = async (apolloClient: ApolloClient<object>, token: string) => {
  ``;
  cookie.set('token', token, { expires: 30 });

  await apolloClient.resetStore();
  redirect({}, '/');
};

const logout = async (apolloClient: ApolloClient<object>, persistor: any) => {
  cookie.remove('token');

  persistor.pause(); // Pause automatic persistence.
  persistor.purge(); // Delete everything in the storage provider.
  persistor.resume();

  // // Force a reload of all the current queries  now that the user is
  // // logged in, so we don't accidentally leave any state around.
  apolloClient.resetStore();
  redirect({}, '/login');
};

const checkLoggedIn = (apolloClient: ApolloClient<object>) =>
  apolloClient
    .query({
      query: GET_CURRENT_USER,
    })
    .then(({ data }) => {
      return { loggedInUser: data.me };
    })
    .catch(err => {
      console.log(err);

      return { loggedInUser: null };
    });

export { logout, useCurrentUserQuery, signup, checkLoggedIn };
