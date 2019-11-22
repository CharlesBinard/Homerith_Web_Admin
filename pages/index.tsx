import { useApolloClient } from '@apollo/react-hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import InfoBanner from '../src/components/InfoBanner';
import AddTeam from '../src/containers/AddTeam';

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
        <title>Home | Homerith</title>
      </Head>
      <InfoBanner />
      <AddTeam />
    </>
  );
};

export default IndexPage;
