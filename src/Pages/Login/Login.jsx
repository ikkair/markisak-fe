import React, { useEffect, useState } from 'react';
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth';
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../Features/auth/authApi';
import style from '../../Components/Layout/AuthLayout/style.module.css';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../Features/auth/authSlice';

const Login = () => {
  const MySwal = withReactContent(Swal);

  const dispatch = useDispatch();
  const [loginUser, { isLoading, isSuccess, error }] = useLoginUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandler = async () => {
    const data = await loginUser({ email, password });
    const userBeforRedestruct = data?.data?.data[0];
    const { refreshToken, token, ...other } = userBeforRedestruct;
    dispatch(setCredentials({ data: other, token, refreshToken }));
  };

  function showLoading() {
    Swal.fire({
      title: 'Loading...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
  const successLoading = () => {
    Swal.close();
    if (isSuccess) {
      MySwal.fire({
        title: <p>Register Success, Check your Email for activate!</p>,
        icon: 'success',
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess]);

  return (
    <div>
      <AuthLayout title="Welcome" description="Log in into your exiting account">
        {isLoading ? (
          showLoading()
        ) : (
          <>
            {Swal.close()}
            {error && (
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{error?.data?.status}</strong> {error?.data?.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )}
            <InputFormAuth title="Email" value={email} name="email" type="email" onchange={(e) => setEmail(e.target.value)} />
            <InputFormAuth title="Password" name="password" type="password" onchange={(e) => setPassword(e.target.value)} />

            <div className="d-grid mb-2 mt-3 text-light">
              <button className="btn btn-warning text-light" type="button" onClick={loginHandler}>
                Login
              </button>
            </div>
            <div className="forgotPassword text-end mb-3">
              <Link to={'/forgot-password'} className={`link-dark text-decoration-none ${style.formLabel}`} style={{ fontSize: '14px' }} href="">
                Forgot Password?
              </Link>
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
          </>
        )}
      </AuthLayout>
    </div>
  );
};

export default Login;
