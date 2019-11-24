import { useApolloClient } from '@apollo/react-hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Login from '../src/containers/Login';
import redirect from '../src/lib/redirect';
import { checkLoggedIn } from '../src/lib/auth/auth-helpers';

const LoginPage: NextPage = () => {
  const client = useApolloClient();

  useEffect(() =>
    client.writeData({
      data: { activeRoute: { __typename: 'Route', name: 'Login', parentHref: null, parentAs: null } },
    }),
  );

  return (
    <>
      <Head>
        <title>Login | Homerith</title>
      </Head>
      <Login />
    </>
  );
};

LoginPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (loggedInUser) {
    redirect(context, '/');
  }

  return {};
};

export default LoginPage;
