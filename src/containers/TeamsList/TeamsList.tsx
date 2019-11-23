import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import TeamListComponent from '../../components/TeamList';
import { GET_TEAMS } from './queries';

const TeamsList: FC = () => {
  const { loading, error, data } = useQuery(GET_TEAMS);

  return <TeamListComponent />;
};

export default TeamsList;
