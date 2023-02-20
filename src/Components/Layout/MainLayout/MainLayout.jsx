import React from 'react';
import { useLocation } from 'react-router-dom';
import MainFooter from '../../Footer/MainFooter';
import Navbar from '../../Navbar/Navbar';
import style from './style.module.css';

const MainLayout = ({ children }) => {
  const url = useLocation();

  return (
    <>
      <Navbar />
      <main className={`${style.mainContent} ${url.pathname == '/recipes' ? style.setBackground : 'mt-5'}`}>{children}</main>
      <MainFooter />
    </>
  );
};

export default MainLayout;
