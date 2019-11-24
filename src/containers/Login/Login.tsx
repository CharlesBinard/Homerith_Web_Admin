import { useMutation, useApolloClient } from '@apollo/react-hooks';
import React, { FC } from 'react';
import LoginForm from '../../components/LoginForm';
import { MutationSignInArgs } from '../../global.types';
import SIGN_IN from '../../graphql/mutations/signin';
import { signup } from '../../lib/auth/auth-helpers';

const Login: FC = () => {
  const client = useApolloClient();

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
    signup(client, data.signIn.token);
  }

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      errorMessage={error && error.graphQLErrors[0] && error.graphQLErrors[0].message}
      isLoading={loading}
    />
  );
};

export default Login;
