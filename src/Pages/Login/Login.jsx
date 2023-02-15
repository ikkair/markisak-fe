import React, { useState } from 'react';
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth';
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout';
import { Link } from 'react-router-dom';
import { useLoginUserMutation } from '../../Features/auth/authApi';
import style from '../../Components/Layout/AuthLayout/style.module.css';

const Login = () => {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    await loginUser({ email, password });
  };

  return (
    <div>
      <AuthLayout title="Welcome" description="Log in into your exiting account">
        <InputFormAuth title="Email" name="email" type="text" onchange={(e) => setEmail(e.target.value)} />
        <InputFormAuth title="Password" name="password" type="password" onchange={(e) => setPassword(e.target.value)} />

        <div className="form-check mb-3 customCheck">
          <input className="form-check-input" type="checkbox" value="" id={style.flexCheckDefault} />
          <label className={`form-check-label ${style.formLabel}`} for={style.flexCheckDefault}>
            I agree to terms & conditions
          </label>
        </div>
        <div className="d-grid mb-2 mt-3 text-light">
          <button className="btn btn-warning text-light" type="button">
            Login
          </button>
        </div>
        <div className="forgotPassword text-end mb-3">
          <a className={`link-dark text-decoration-none ${style.formLabel}`} style={{ fontSize: '14px' }} href="">
            Forgot Password?
          </a>
        </div>
        <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
          <p>
            Don’t have an account?{' '}
            <Link to={'/register'} style={{ textDecoration: 'none', color: 'rgb(239, 200, 26)' }}>
              {' '}
              Sign Up
            </Link>
          </p>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;
