import React from 'react'
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth'
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout'

const Login = () => {
  return (
    <div>
        <AuthLayout>
            <InputFormAuth
            title="Email"
            name="email"
            type="text"
            />
            <InputFormAuth
            title="Password"
            name="password"
            type="password"
            />
        </AuthLayout>
    </div>
  )
}

export default Login