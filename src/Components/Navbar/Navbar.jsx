import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import style from './style.module.css';
import photoDefault from '../../assets/Profile/photo.png';
import { logout, setCredentials } from '../../Features/auth/authSlice';
import { useGetUserDetailQuery } from '../../Features/user/userApi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Navbar = () => {
  const MySwal = withReactContent(Swal);

  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);
  const { data: userLogin, isLoading, isSuccess } = useGetUserDetailQuery(localStorage.getItem('id_user'));
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(logout());
    MySwal.fire({
      title: <p>Logout Success!</p>,
      icon: 'success',
    });
  }

  function profileUser() {
    if (user.photo.split('.')[0] == 'photo') {
      return [photoDefault];
    }

    return user.photo;
  }

  useEffect(() => {
    if (!user) {
      if (isSuccess) {
        dispatch(setCredentials({ token: accessToken, refreshToken, data: userLogin }));
      }
    }
  }, [userLogin]);

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
          <ul className={` navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll`}>
            <li className="nav-item">
              <a className={`${style.textWhite} ${pathname == '/recipes' ? 'text-light' : ''} nav-link active`} aria-current="page" href="/#home">
                Home
              </a>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <a className={`${style.textWhite} ${pathname == '/recipes' ? 'text-light' : ''} nav-link active`} aria-current="page" href="/dashboard/create-recipe/#content">
                    Add Recipe
                  </a>
                </li>
                <li className="nav-item">
                  <Link className={`${style.textWhite} ${pathname == '/recipes' ? 'text-light' : ''} nav-link active`} aria-current="page" to="/profile/#content">
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className={`${style.textWhite} ${pathname == '/recipes' ? 'text-light' : ''} nav-link active`} aria-current="page" href="#popularRecipe">
                    Popular Recipe
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${style.textWhite} ${pathname == '/recipes' ? 'text-light' : ''} nav-link active`} aria-current="page" href="#newRecipe">
                    New Recipe
                  </a>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            {user ? (
              <>
                <Link to="#" className={`${style.textWhite} text-decoration-none text-dark d-flex align-items-center `}>
                  <span className={`${style.iconLogin} d-flex align-items-center justify-content-center rounded-circle border border-1 me-2`}>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <div className="btn-group d-flex align-items-center">
                    <button type="button" className={`${style.userName} border-0 bg-transparent dropdown-toggle ${pathname != '/' && pathname != '/recipes' ? 'text-dark' : ''} `} data-bs-toggle="dropdown" aria-expanded="false">
                      {user?.name}
                    </button>

                    <ul className="dropdown-menu">
                      <li className="dropdown-item" onClick={logoutHandler}>
                        <FontAwesomeIcon className="text-danger" icon={faRightFromBracket} /> Logout
                      </li>
                    </ul>
                  </div>
                </Link>
              </>
            ) : (
              <div className="text-light">
                <Link to="/login" className={`${style.authLink} ${pathname != '/' ? 'text-dark' : ''} text-decoration-none fw-semibold me-2`}>
                  Login
                </Link>
                |
                <Link to="/register" className={`${style.authLink} ${pathname != '/' ? 'text-dark' : ''} text-decoration-none fw-semibold ms-2`}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
