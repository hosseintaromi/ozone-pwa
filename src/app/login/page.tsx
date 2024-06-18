import React from 'react';

import Login from '@/components/app/login/Login';
import { metadata as loginMetadata } from '@/components/app/login/meta';

export const metadata = loginMetadata;

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
