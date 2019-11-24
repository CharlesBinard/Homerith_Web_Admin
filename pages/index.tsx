import { useApolloClient } from '@apollo/react-hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Login from '../src/components/Login';
import { useAuth } from '../src/lib/auth';

const IndexPage: NextPage = () => {
  const client = useApolloClient();
  const [{ data }] = useAuth();
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
      {!data.me ? (
        <Login />
      ) : (
        <>
          <h1> Home </h1>
        </>
      )}
    </>
  );
};

export default IndexPage;
