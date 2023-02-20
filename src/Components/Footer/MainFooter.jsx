import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from '../Footer/style.module.css';

const MainFooter = () => {
  const url = useLocation();

  return (
    <div>
      <footer className={`container-fluid ${url.pathname == '/recipes' ? '' : 'mt-5'} ${style.footer}`}>
        <div className="row">
          <div className={`text-center ${style.head}`}>
            <h1>Eat, Cook, Repeat</h1>
          </div>
          <p className="text-secondary text-center mt-3">Share your best recipe by uploading here !</p>
          <div className="text-secondary text-center">
            <ul className={`list-inline ${style.listInline}`}>
              <li className="list-inline-item mx-2">
                <Link className={`list-link ${style.listLink}`} to="#">
                  Product
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className={`list-link ${style.listLink}`} to="#">
                  Company
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className={`list-link ${style.listLink}`} to="#">
                  Learn More
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className={`list-link ${style.listLink}`} to="#">
                  Laptop
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className={`list-link ${style.listLink}`} to="#">
                  get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
