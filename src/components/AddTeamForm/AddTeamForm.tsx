import { Button, FormGroup, Input } from '@material-ui/core';
import React, { FC, useState } from 'react';

type Props = {
  handleSubmit: (e: any, name: string, logo: File | null) => void;
};

const HomeContainer: FC<Props> = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState<File | null>(null);

  return (
    <div>
      <form onSubmit={e => handleSubmit(e, name, logo)}>
        <FormGroup>
          <Input autoFocus type="text" value={name} onChange={e => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Input type="file" onChange={(e: any) => setLogo(e.target.files[0])} />
        </FormGroup>
        <Button variant="contained" color="primary" type="submit">
          Valider
        </Button>
      </form>
    </div>
  );
};

export default HomeContainer;
