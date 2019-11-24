import { useMutation } from '@apollo/react-hooks';
import React, { FC } from 'react';
import LoginForm from '../../components/LoginForm';
import { MutationSignInArgs } from '../../global.types';
import SIGN_IN from '../../graphql/mutations/signin';
import { saveTokenInCookies } from '../../lib/auth/auth-helpers';

const AddTeam: FC = () => {
  const [signIn, { data, error, loading }] = useMutation(SIGN_IN);

  const handleSubmit = async (e: any, { login, password }: MutationSignInArgs): Promise<void> => {
    e.preventDefault();

    await signIn({
      variables: {
        login: login,
        password: password,
      },
    });
  };
  if (data && data.signIn && data.signIn.token) {
    saveTokenInCookies(data.signIn.token);
  }

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      errorMessage={error && error.graphQLErrors[0] && error.graphQLErrors[0].message}
      isLoading={loading}
    />
  );
};

export default AddTeam;
