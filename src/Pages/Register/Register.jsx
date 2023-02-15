import React from 'react'
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth'
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout'
import style from '../../Components/Layout/AuthLayout/style.module.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <AuthLayout
            title="Let’s Get Started !"
            description="Create new account to access all features"
        >
            <InputFormAuth
                title="Name"
                name="name"
                type="text"
            />
            <InputFormAuth
                title="Email Address"
                name="email"
                type="text"
            />
            <InputFormAuth
                title="Phone Number"
                name="number"
                type="number"
            />
            <InputFormAuth
                title="Password"
                name="password"
                type="password"
            />
            <InputFormAuth
                title="Confirm Password"
                name="confirmPassword"
                type="password"
            />

            <div class="form-check mb-3 customCheck">
                <input class="form-check-input" type="checkbox" value="" id={style.flexCheckDefault} />
                <label class={`form-check-label ${style.formLabel}`} for={style.flexCheckDefault}>
                    I agree to terms & conditions
                </label>
            </div>
            <div class="d-grid mb-2 mt-3">
                <button class="btn btn-warning text-light" type="button">Register</button>
            </div>
            <div class={`loginLink text-center mt-3 ${style.formLabel}`}>
                <p>Already have account? <Link to={'/login'} style={{ textDecoration: "none", color: "rgb(239, 200, 26)" }}> Log in Here</Link></p>
            </div>

        </AuthLayout>
    )
}

export default Register