import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useVerfifyEmailQuery } from '../../Features/auth/authApi';
import style from './style.module.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Verification = () => {
  const MySwal = withReactContent(Swal);

  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, error, isError } = useVerfifyEmailQuery(searchParams.get('token'));

  function showLoading() {
    Swal.fire({
      title: 'Loading...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  return isLoading
    ? showLoading()
    : (Swal.close(),
      (
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto mt-5">
              <div className={`${style.payment} shadow`}>
                <div className={style.payment_header}>
                  <div className={style.check}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </div>
                </div>
                <div className={style.content}>
                  <h1 className="font-weight-bold" style={{ fontSize: '40px' }}>
                    Verification Success!
                  </h1>
                  <p>
                    Thanks for keeping Stitch safe! <br /> if you questions you can contact us any time by emailing.{' '}
                  </p>
                  <Link to="/login" className="text-decoration-none p-2 px-3">
                    Go to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
};

export default Verification;
