import { Button, FormLabel, Input } from '@material-ui/core';
import React, { FC, useState } from 'react';
import * as S from './styles';
type Props = {
  handleSubmit: (e: any, name: string, logo: File | null) => void;
};

const HomeContainer: FC<Props> = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState<File | null>(null);

  return (
    <S.Content>
      <h1>Add Team</h1>
      <form onSubmit={e => handleSubmit(e, name, logo)}>
        <S.CustomFormGroup>
          <FormLabel component="legend">Team name</FormLabel>
          <Input autoFocus type="text" value={name} onChange={e => setName(e.target.value)} />
        </S.CustomFormGroup>
        <S.CustomFormGroup>
          <FormLabel component="legend">Team logo </FormLabel>
          <Input type="file" onChange={(e: any) => setLogo(e.target.files[0])} />
        </S.CustomFormGroup>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Valider
        </Button>
      </form>
    </S.Content>
  );
};

export default HomeContainer;
