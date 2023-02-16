import React from 'react';
import MainFooter from '../../Footer/MainFooter';
import Navbar from '../../Navbar/Navbar';
import style from './style.module.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`${style.mainContent} mt-5 `}>{children}</main>
      <MainFooter />
    </>
  );
};

export default MainLayout;
