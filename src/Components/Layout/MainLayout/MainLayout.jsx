import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import style from './style.module.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`${style.mainContent} mt-5 `}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
