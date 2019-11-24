import { useApolloClient } from '@apollo/react-hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { checkLoggedIn } from '../src/lib/auth/auth-helpers';
import redirect from '../src/lib/redirect';

const IndexPage: NextPage = () => {
  const client = useApolloClient();

  useEffect(() =>
    client.writeData({
      data: { activeRoute: { __typename: 'Route', name: 'Home', parentHref: null, parentAs: null } },
    }),
  );

  return (
    <>
      <Head>
        <title>Home | Homerith Admin</title>
      </Head>
      <>
        <h1> Home </h1>
      </>
    </>
  );
};

IndexPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (!loggedInUser) {
    redirect(context, '/login');
  }

  return {};
};

export default IndexPage;
