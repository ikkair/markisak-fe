import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-transparent pt-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand d-sm-none" to="#">
          Markisak
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Profile
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="text-decoration-none text-dark">
              <FontAwesomeIcon className="me-2" icon={faUser} />
              <span>Login</span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
