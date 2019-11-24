import React, { ComponentType } from 'react';
import { useCurrentUserQuery } from './auth-helpers';

export const withAuth = (WrappedComponent: ComponentType) => (props: any) => {
  const { loading, data } = useCurrentUserQuery();
  if (loading) {
    return <div>Loading...</div>;
  }

  let me = null;

  if (data.me) {
    ({ me } = data);
  }

  return <WrappedComponent loggedInUser={me} {...props} />;
};
