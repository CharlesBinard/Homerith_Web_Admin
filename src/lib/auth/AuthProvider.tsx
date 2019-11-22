import React, { createContext, useContext } from 'react';
import { logout, useCurrentUserQuery } from './auth-helpers';

const AuthContext = createContext(null);

const AuthProvider: any = (props: any) => {
  const { loading, data } = useCurrentUserQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={[{ data: data || [] }, logout]} {...props} />;
};

const useAuth = (): any => useContext(AuthContext);

export { AuthProvider, useAuth };
