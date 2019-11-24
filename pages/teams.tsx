import { useApolloClient } from '@apollo/react-hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Login from '../src/components/Login';
import AddTeam from '../src/containers/AddTeam';
import TeamsList from '../src/containers/TeamsList';
import { useAuth } from '../src/lib/auth';

const teamsPage: NextPage = () => {
  const client = useApolloClient();
  const [{ data }] = useAuth();

  useEffect(() =>
    client.writeData({
      data: { activeRoute: { __typename: 'Route', name: 'Teams', parentHref: null, parentAs: null } },
    }),
  );

  return (
    <>
      <Head>
        <title>Home | Homerith</title>
      </Head>
      {!data.me ? (
        <Login />
      ) : (
        <>
          <AddTeam />
          <TeamsList />
        </>
      )}
    </>
  );
};

export default teamsPage;
