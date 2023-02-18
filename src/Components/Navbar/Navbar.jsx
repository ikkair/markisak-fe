import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import style from './style.module.css';
import photoDefault from '../../assets/Profile/photo.png';
import { logout } from '../../Features/auth/authSlice';

const Navbar = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(logout());
  }

  function profileUser() {
    if (user.photo.split('.')[0] == 'photo') {
      return [photoDefault];
    }

    return user.photo;
  }

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
            {user ? (
              <>
                <Link to="#" className={`${style.textWhite} text-decoration-none text-dark d-flex align-items-center`}>
                  <span className={`${style.iconLogin} d-flex align-items-center justify-content-center rounded-circle border border-1 me-2`}>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <div class="btn-group d-flex align-items-center">
                    <button type="button" class={`${style.userName} border-0 bg-transparent dropdown-toggle ${pathname != '/' ? 'text-dark' : 'text-white'}`} data-bs-toggle="dropdown" aria-expanded="false">
                      {user?.name}
                    </button>

                    <ul class="dropdown-menu">
                      <li className="dropdown-item" onClick={logoutHandler}>
                        <FontAwesomeIcon className="text-danger" icon={faRightFromBracket} /> Logout
                      </li>
                    </ul>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className={` text-dark text-decoration-none fw-semibold me-2`}>
                  Login /
                </Link>
                <Link to="/register" className={` text-dark text-decoration-none fw-semibold `}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
