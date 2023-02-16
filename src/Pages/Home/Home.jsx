import React from 'react';
import Footer from '../../Components/Footer/MainFooter';
import MainLayout from '../../Components/Layout/MainLayout/MainLayout';
import Navbar from './../../Components/Navbar/Navbar';
import InputFormAddRecipe from './../../Components/Form/InputFormAddRecipe/InputFormAddRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.css';
import imgFood from '../../assets/Home/food.png';
import LandingPageSection from './../../Components/Section/LandingPageSection/LandingPageSection';

const Home = () => {
  return (
    <MainLayout>
      <div className={`${style.firstSection} first-section container pt-5`}>
        <div className="row">
          <div className={`${style.leftSide} col-12 col-sm-7 d-flex align-items-center`}>
            <div className="row main-title ">
              <div className={`col-12 col-lg-8 fw-semibold fs-1`}>
                <span className={`${style.title}`}> Discover Recipe & Delicious Food</span>
              </div>
              <div className={`col-9 col-md-7`}>
                <div className={` ${style.inputBackground} d-flex align-items-center gap-1 ps-4 rounded`}>
                  <FontAwesomeIcon className="text-secondary" type="text" icon={faSearch} />
                  <input className="form-control bg-transparent border-0 text-secondary shadow-none" type="text" name="search" placeholder="Search here" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 d-none d-sm-grid">
            <img src={imgFood} className={`${style.firstSectionImg} img-fluid`} alt="" />
          </div>
        </div>
      </div>

      <LandingPageSection title={'Popular For You!'} embedClass={`${style.sectionPage}`}>
        <div className="col-12 col-sm-6">
          <div className="row">
            <div className={`${style.colImg} col-12 position-relative`}>
              <img src={imgFood} className={`${style.firstSectionImg} img-fluid`} alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-grid align-items-center">
          <div className="row main-title d-inline-block d-md-flex flex-column align-items-end">
            <div className={`col-8 pe-3`}>
              <span className={`${style.sectionTitleContent} text-nowrap d-block fw-semibold fs-3 pb-2`}>
                Healthy Bone Broth <br /> Ramen (Quick & Easy)
              </span>
            </div>
            <div className={`col-12 col-md-8 mt-3 text-secondary ${style.sectionDesc}`}>
              <span>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</span>
            </div>
            <div className="col-8">
              <button className={`btn btn-warning text-light mt-3 ${style.btnLearnMore}`}>Learn More</button>
            </div>
          </div>
        </div>
      </LandingPageSection>

      <LandingPageSection title={'New Recipe'} embedClass={`${style.sectionPage}`}>
        <div className="col-12 col-sm-6">
          <div className="row">
            <div className={`${style.colImg2} col-12 position-relative`}>
              <img src={imgFood} className={`${style.firstSectionImg} img-fluid`} alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-grid align-items-center mb-5">
          <div className="row main-title d-inline-block d-md-flex flex-column align-items-end">
            <div className={`col-8 pe-3`}>
              <span className={`${style.sectionTitleContent} text-nowrap d-block fw-semibold fs-3 pb-2`}>
                Healthy Bone Broth <br /> Ramen (Quick & Easy)
              </span>
            </div>
            <div className={`col-12 col-md-8 mt-3 text-secondary ${style.sectionDesc}`}>
              <span>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</span>
            </div>
            <div className="col-8">
              <button className={`btn btn-warning text-light mt-3 ${style.btnLearnMore}`}>Learn More</button>
            </div>
          </div>
        </div>
      </LandingPageSection>

      <div className={`chat position-absolute`}>\</div>
    </MainLayout>
  );
};

export default Home;
