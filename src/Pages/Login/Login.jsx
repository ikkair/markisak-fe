import React, { useState } from 'react';
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth';
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout';
import { useLoginUserMutation } from '../../Features/auth/authApi';

const Login = () => {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    await loginUser({ email, password });
  };

  return (
    <div>
      <AuthLayout>
        <InputFormAuth title="Email" name="email" type="text" onchange={(e) => setEmail(e.target.value)} />
        <InputFormAuth title="Password" name="password" type="password" onchange={(e) => setPassword(e.target.value)} />
      </AuthLayout>
    </div>
  );
};

export default Login;
