import React, { useEffect, useState } from 'react';
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth';
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout';
import style from '../../Components/Layout/AuthLayout/style.module.css';
import { Link } from 'react-router-dom';
import { useRegisterUserMutation } from '../../Features/auth/authApi';

const Register = () => {
  const [userRegister, { isLoading, error }] = useRegisterUserMutation();
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [checkTerms, setCheckTerms] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: '',
  });

  const changeHandler = (e) => {
    console.log(data);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  function checkPasswordMatch(password) {
    if (password != passwordConfirm) {
      throw 'Password not match!';
    }

    return password;
  }

  const onRegisHandler = async () => {
    try {
      const passwordValidated = await checkPasswordMatch(data.password);
      await userRegister({ ...data, password: passwordValidated });
    } catch (err) {
      setPasswordError(err);
    }
    await userRegister(data);
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <AuthLayout title="Let’s Get Started !" description="Create new account to access all features">
      <InputFormAuth title="Name" name="name" type="text" onchange={(e) => changeHandler(e)} />
      <InputFormAuth title="Email Address" name="email" type="text" onchange={(e) => changeHandler(e)} />
      <InputFormAuth title="Phone Number" name="phone_number" type="number" onchange={(e) => changeHandler(e)} />
      <InputFormAuth title="Password" name="password" type="password" onchange={(e) => changeHandler(e)} />
      <InputFormAuth title="Confirm Password" name="confirmPassword" type="password" onchange={(e) => setPasswordConfirm(e.target.value)} />

      {passwordError ? <h1>{passwordError}</h1> : ''}

      <div class="form-check mb-3 customCheck">
        <input class="form-check-input" type="checkbox" value="" onChange={() => setCheckTerms((prev) => !prev)} id={style.flexCheckDefault} />
        <label class={`form-check-label ${style.formLabel}`} for={style.flexCheckDefault}>
          I agree to terms & conditions
        </label>
      </div>
      <div class="d-grid mb-2 mt-3">
        <button class="btn btn-warning text-light" type="button" onClick={onRegisHandler} disabled={!(checkTerms && data.name && data.email && data.password && data.phone_number)}>
          Register
        </button>
      </div>
      <div class={`loginLink text-center mt-3 ${style.formLabel}`}>
        <p>
          Already have account?{' '}
          <Link to={'/login'} style={{ textDecoration: 'none', color: 'rgb(239, 200, 26)' }}>
            {' '}
            Log in Here
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
