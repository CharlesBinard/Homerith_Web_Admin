import { useApolloClient } from '@apollo/react-hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import AddTeam from '../src/containers/AddTeam';
import TeamsList from '../src/containers/TeamsList';
import redirect from '../src/lib/redirect';
import { checkLoggedIn } from '../src/lib/auth/auth-helpers';

const TeamsPage: NextPage = () => {
  const client = useApolloClient();

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
      <>
        <AddTeam />
        <TeamsList />
      </>
    </>
  );
};

TeamsPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (!loggedInUser) {
    redirect(context, '/');
  }

  return {};
};

export default TeamsPage;
