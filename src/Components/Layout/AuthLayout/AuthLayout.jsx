import React from 'react';
import InputFormAuth from '../../Form/InputFormAuth/InputFormAuth';
import logo from '../../../assets/Authpage/Group.png';
import style from './style.module.css';

const AuthLayout = ({ children, title, description }) => {
  return (
    <>
      <main>
        <div className="container-fluid loginPage vh-100">
          <div className="row h-100 d-flex ">
            <div className={`col-md-6 ${style.sideLeft} vh-100 d-md-flex flex-column justify-content-center align-items-center d-none`}>
              <img src={logo} alt="" />
              <p>Mari Kita Masak.</p>
            </div>
            <div className={`col-md-6 ${style.sideRight} h-100 text-center d-grid align-items-center`}>
              <div className="inputGroup">
                {/* <h1 className='text-warning mb- fw-bold mb-4 d-block d-lg-none'>MARKISAK.</h1> */}
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-8">
                    <header className="text-center">
                      <h3 className="">{title}</h3>
                      <p className="mb-2">{description}</p>
                    </header>
                  </div>
                </div>
                <div className={`${style.inputField} text-start mt-4`}>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-8 col-10">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
