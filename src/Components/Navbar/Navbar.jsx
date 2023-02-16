import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Navbar = () => {
  return (
    <nav className={`${style.mainNavbar} navbar navbar-expand-sm pt-3 fixed-top`}>
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
          <form className="d-flex" role="search">
            <Link to="/login" className={`${style.textWhite} text-decoration-none text-dark d-none d-md-flex align-items-center`}>
              <span className={`${style.iconLogin} d-md-flex align-items-center me-2 justify-content-center rounded-circle border border-1`}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Login</span>
            </Link>
            <Link to="/login" className="text-decoration-none text-dark d-flex d-md-none align-items-center">
              <FontAwesomeIcon className={`${style.textWhite} me-2`} icon={faUser} />
              <span className={`${style.textWhite}`}>Login</span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
