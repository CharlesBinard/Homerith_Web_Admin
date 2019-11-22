import { useMutation } from '@apollo/react-hooks';
import React, { FC } from 'react';
import AddTeamForm from '../../components/AddTeamForm';
import { ADD_TEAM } from './queries';

const AddTeam: FC = () => {
  const [addTeam] = useMutation(ADD_TEAM);

  const handleSubmit = (e, name, logo): void => {
    e.preventDefault();

    addTeam({
      variables: {
        logo: logo,
        name: name,
      },
    });
  }; // setLogo(e.target.files && e.target.files[0])

  return <AddTeamForm handleSubmit={handleSubmit} />;
};

export default AddTeam;
