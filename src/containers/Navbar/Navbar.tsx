import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import NavBar from '../../components/NavBar';
import NavBarQuery from './navbarQuery.gql';
import { navbarQuery } from './types/navbarQuery';

const AppbarContainer: FC = () => {
  const { data } = useQuery<navbarQuery>(NavBarQuery);
  return <NavBar data={data}></NavBar>;
};

export default AppbarContainer;
