import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './style.module.css';

const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const navbar = document.querySelector('#navbar');
    const navMenu = document.querySelectorAll('.nav-link');

    function changeColorMenu() {
      navMenu?.forEach((menu) => {
        if (window.pageYOffset > 60) {
          menu.style.color = '#ffffff';
        } else {
          menu.style.color = '#000000';
        }
      });
    }

    function changeBackgroundNavbar() {
      if (window.pageYOffset > 60) {
        navbar.style.backgroundColor = '#efc81a';
        navbar.style.padding = '0 !important';
      } else {
        navbar.style.backgroundColor = 'inherit';
      }
    }
    window.addEventListener('scroll', (e) => {
      changeColorMenu();
      changeBackgroundNavbar();
    });
  }, [pathname]);

  return (
    <nav id="navbar" className={`${style.mainNavbar} navbar navbar-expand-sm pt-3 fixed-top`}>
      <div className="container">
        <Link className={`${style.textWhite} navbar-brand d-sm-none`} to="#">
          Markisak
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className={`${style.textWhite} nav-link active`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${style.textWhite} nav-link active`} aria-current="page" to="/dashboard/create-recipe">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${style.textWhite} nav-link active`} aria-current="page" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-end">
            <Link to="/login" className={`${style.textWhite} text-decoration-none text-dark d-none d-md-flex align-items-center`}>
              <span className={`${style.iconLogin} d-md-flex align-items-center me-2 justify-content-center rounded-circle border border-1`}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className={`${pathname == '/' ? 'text-light' : 'text-dark'}`}>Login</span>
            </Link>
            <Link to="/login" className="text-decoration-none text-dark d-flex d-md-none align-items-center  ">
              <FontAwesomeIcon className={`${style.textWhite} me-2`} icon={faUser} />
              <span className={`${style.textWhite} d-block`}>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
