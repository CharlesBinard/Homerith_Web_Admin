import { useApolloClient } from '@apollo/react-hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import AddTeam from '../src/containers/AddTeam';

const teamsPage: NextPage = () => {
  const client = useApolloClient();

  useEffect(() =>
    client.writeData({
      data: { activeRoute: { __typename: 'Route', name: 'teams', parentHref: null, parentAs: null } },
    }),
  );

  return (
    <>
      <Head>
        <title>Home | Homerith</title>
      </Head>
      <AddTeam />
    </>
  );
};

export default teamsPage;
