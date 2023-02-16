import React from 'react';
import style from './style.module.css';

const LandingPageSection = ({ title, embedClass, children }) => {
  return (
    <div className={`${embedClass} ${style.sectionContainer} pt-5 container`}>
      <div className="row">
        <div className="col-12 py-3">
          <span className={`${style.borderTitle} fs-4 ps-2 py-3 fw-semibold d-block mb-4`}>{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default LandingPageSection;
