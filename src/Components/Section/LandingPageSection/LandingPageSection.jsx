import React from 'react';
import style from './style.module.css';

const LandingPageSection = ({ title, embedClass, children }) => {
  return (
    <div className={`${embedClass} ${style.sectionContainer} container`}>
      <div className="row">
        <div className={`${style.columnTitle} col-12 py-3`}>
          <span className={`${style.borderTitle} ${style.title} fs-2 ps-2 py-2 fw-semibold d-block`}>{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default LandingPageSection;
