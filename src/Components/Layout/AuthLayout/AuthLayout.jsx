import React from 'react'
import InputFormAuth from '../../Form/InputFormAuth/InputFormAuth'
import logo from '../../../assets/Authpage/Group.png'
import style from './style.module.css'

const AuthLayout = ({children, title, description, linked}) => {
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
                                {/* <h1 className='text-warning mb- fw-bold mb-4 d-block d-lg-none'>MARKISAK.</h1> */}
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-8">
                                    <header className='text-center'>
                                        <h3 class="">{title}</h3>
                                        <p class="mb-2">{description}</p>
                                    </header>
                                    </div>
                                </div>
                                    <div class={`${style.inputField} text-start mt-4`}>
                                        <div class="row justify-content-center">
                                            <div class="col-lg-6 col-10">
                                                {children}
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