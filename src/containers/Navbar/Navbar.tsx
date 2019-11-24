import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import NavBar from '../../components/NavBar';
import { GetActiveRouteQuery } from '../../global.types';
import GET_ACTIVE_ROUTE from '../../graphql/queries/getActiveRoute';

const AppbarContainer: FC = () => {
  const { data } = useQuery<GetActiveRouteQuery>(GET_ACTIVE_ROUTE);
  return <NavBar data={data}></NavBar>;
};

export default AppbarContainer;
