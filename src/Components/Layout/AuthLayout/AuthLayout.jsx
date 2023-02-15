import React from 'react'
import InputFormAuth from '../../Form/InputFormAuth/InputFormAuth'
import logo from '../../../assets/Authpage/Group.png'
import style from './style.module.css'

const AuthLayout = ({children}) => {
    return (
        <>
            <main>
                <div class="container-fluid loginPage vh-100">
                    <div class="row h-100 d-flex ">
                        <div class={`col-md-6 ${style.sideLeft} vh-100 d-md-flex flex-column justify-content-center align-items-center d-none`}>
                            <img src={logo} alt=""/>
                                <p>Mari Kita Masak.</p>
                        </div>
                        <div class={`col-md-6 ${style.sideRight} h-100 text-center d-grid align-items-center`}>
                            <div class="inputGroup">
                                <h1 className='text-warning mb- fw-bold mb-4 d-block d-lg-none'>MARKISAK.</h1>
                                    <header>
                                        <h3 class="mb-4">Welcome</h3>
                                        <p class="mb-2">Log in into your exiting account</p>
                                    </header>
                                    <div class={`${style.inputField} text-start mt-4`}>
                                        <div class="row justify-content-center">
                                            <div class="col-lg-6 col-10">
                                                {children}
                                                <div class="form-check mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            I agree to terms & conditions
                                                        </label>
                                                </div>
                                                <div class="d-grid mb-2">
                                                    <button class="btn btn-warning" type="button">Button</button>
                                                </div>
                                                <div class="forgotPassword text-end mb-3">
                                                    <a class="link-dark text-decoration-none" href="">Forgot Password?</a>
                                                </div>
                                                <div class="loginLink text-center">
                                                    <p>Don’t have an account? <a href="" class="text-decoration-none link-dark"> Sign Up</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default AuthLayout