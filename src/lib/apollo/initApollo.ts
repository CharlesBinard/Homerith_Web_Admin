import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'isomorphic-unfetch';
import { ApolloClientType } from './interfaces';
import isBrowser from './isBrowser';
let apolloClient: ApolloClientType;

interface Options {
  getToken(): string;
}

const create: any = (initialState = {}, { getToken }: Options) => {
  const httpLink = new createUploadLink({
    uri: 'http://localhost:8000/graphql',
    fetch: fetch,
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        'x-token': token || '',
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
  });
};

const initApollo: any = (initialState = {}, options: Options) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
};

export default initApollo;
