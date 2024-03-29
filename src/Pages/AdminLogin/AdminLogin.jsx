import React, { useEffect, useState } from 'react';
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth';
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../Features/auth/authApi';
import style from '../../Components/Layout/AuthLayout/style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../Features/auth/authSlice';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [checkTerms, setCheckTerms] = useState(false);

  const loginHandler = async () => {
    console.log(username, password);
    const userBeforRedestruct = data.data.data[0];
    const { refreshToken, token, ...other } = userBeforRedestruct;
    dispatch(setCredentials({ data: other, token, refreshToken }));
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate('/');
  //   }
  // }, [isSuccess]);

  // useEffect(() => {
  //   if (checkTerms) {
  //     setCheckTerms((prev) => !prev);
  //   }
  // }, [error]);

  return (
    <div>
      <AuthLayout title="Admin" description="">
        {/* {isLoading ? (
          'Wait for a minute...'
        ) : ( */}
        <>
          {/* {error && (
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{error?.data?.status}</strong> {error?.data?.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )} */}

          <InputFormAuth title="Username" value={username} name="username" type="text" onchange={(e) => setUsername(e.target.value)} />
          <InputFormAuth title="Password" name="password" type="password" onchange={(e) => setPassword(e.target.value)} />

          <div className="form-check mb-3 customCheck">
            <input className="form-check-input" type="checkbox" onChange={() => setCheckTerms((prev) => !prev)} value="" id={style.flexCheckDefault} />
            <label className={`form-check-label ${style.formLabel}`} for={style.flexCheckDefault}>
              I agree to terms & conditions
            </label>
          </div>
          <div className="d-grid mb-2 mt-3 text-light">
            <button className="btn btn-warning text-light" type="button" onClick={loginHandler} disabled={!checkTerms}>
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
        </>
        {/* )} */}
      </AuthLayout>
    </div>
  );
};

export default AdminLogin;
