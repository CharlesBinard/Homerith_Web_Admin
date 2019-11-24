import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import TeamListComponent from '../../components/TeamsList';
import { GetTeamsQuery, Team } from '../../global.types';
import GET_TEAMS from '../../graphql/queries/getTeams';

const TeamsList: FC = () => {
  const { loading, error, data } = useQuery<GetTeamsQuery>(GET_TEAMS);
  let teams: Array<Team> | null = null;

  if (error) {
    return <p> Error </p>;
  }

  if (data && data.teams && data.teams.edges) {
    teams = data.teams.edges;
  }

  return <TeamListComponent teams={teams} isLoading={loading} />;
};

export default TeamsList;
