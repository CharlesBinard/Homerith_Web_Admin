import { useApolloClient } from '@apollo/react-hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

const loginPage: NextPage = () => {
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
    </>
  );
};

export default loginPage;
