import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/MainFooter';
import MainLayout from '../../Components/Layout/MainLayout/MainLayout';
import Navbar from './../../Components/Navbar/Navbar';
import InputFormAddRecipe from './../../Components/Form/InputFormAddRecipe/InputFormAddRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSearch, faCommentDots, faCancel, faXmark } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.css';
import imgFood from '../../assets/Home/food.png';
import imgFood2 from '../../assets/Home/food2.png';
import imgFood3 from '../../assets/Home/food3.png';
import LandingPageSection from './../../Components/Section/LandingPageSection/LandingPageSection';
import { useGetAllRecipeQuery, useGetRecipeByIdQuery } from '../../Features/recipe/recipeApi';
import { Link, useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { data: recipes, isLoading, error } = useGetAllRecipeQuery({});

  function enterHandlerSearch(e) {
    if (e.code == 'Enter') {
      navigate(`/recipes?search=${search}&page=1&limit=12`);
    }
  }

  const chat = document.querySelector('#chat');
  const closeChat = document.querySelector('#closeChat');

  useEffect(() => {
    const chatHeader = document.querySelector('#chatHeader');
    const chatIcon = document.querySelector('#chatIcon');

    chatHeader?.addEventListener('click', () => {
      chat?.classList.toggle('showChat');
    });

    chatIcon?.addEventListener('click', () => {
      chat?.classList.add('showChat');
    });

    closeChat?.addEventListener('click', () => {
      chat?.classList.toggle('showChat');
    });
  }, [chat, closeChat]);
  return (
    <MainLayout>
      <div id="home" className={`${style.firstSection} first-section container pt-5`}>
        <div className="row">
          <div className={`${style.leftSide} col-12 col-sm-7 d-flex align-items-center`}>
            <div className="row main-title ">
              <div className={`col-12 col-lg-8 fw-semibold fs-1`}>
                <span className={`${style.title}`}> Discover Recipe & Delicious Food</span>
              </div>
              <div className={`col-9 col-md-7`}>
                <div className={`${style.inputBackground} py-1 d-flex align-items-center gap-1 ps-4 rounded`}>
                  <FontAwesomeIcon className={style.inputSearch} type="text" icon={faSearch} />
                  <input
                    className={`${style.inputSearch} form-control bg-transparent border-0  shadow-none`}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={enterHandlerSearch}
                    name="search"
                    placeholder="Search here"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 d-none d-sm-grid">
            <img src={imgFood} className={`${style.firstSectionImg} img-fluid`} alt="" />
          </div>
        </div>
      </div>

      <LandingPageSection title={'Popular For You!'} id={'popularRecipe'} embedClass={`${style.sectionPage}`}>
        <div className="col-12 col-sm-6">
          <div className="row">
            <div className={`${style.colImg} col-12 position-relative`}>
              <img src={recipes?.data[0]?.photo} crossOrigin="anonymous" className={`${style.sectionImage} img-fluid rounded`} alt="" />
            </div>
          </div>
        </div>
        {isLoading ? (
          'Loading....'
        ) : (
          <div className="col-12 col-sm-6 d-grid align-items-center">
            <div className="row main-title d-inline-block d-md-flex flex-column align-items-end">
              <div className={`col-10 pe-3`}>
                <span className={`${style.sectionTitleContent} d-block fw-semibold fs-2`}>{recipes?.data[0]?.title}</span>
                <span className={`${style.underlineTitleRecipe} d-none d-md-block  mt-1`}></span>
              </div>
              <div className={`col-12 col-md-10 mt-3 text-secondary ${style.sectionDesc}`}>
                <span>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</span>
              </div>
              <div className="col-10 ">
                <Link to={`/recipes/${recipes?.data[0]?.id}`} className={`btn btn-warning text-light mt-3 ${style.btnLearnMore}`}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        )}
      </LandingPageSection>

      <LandingPageSection title={'New Recipe'} id={'newRecipe'} embedClass={`${style.sectionPage}`}>
        <div className="col-12 col-sm-6">
          <div className="row">
            <div className={`${style.colImg2} col-12 position-relative`}>
              <img src={recipes?.data[1]?.photo} crossOrigin="anonymous" className={`${style.sectionImage} img-flui rounded`} alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-grid align-items-center mb-2">
          <div className="row main-title d-inline-block d-md-flex flex-column align-items-end">
            <div className={`col-10 pe-3`}>
              <span className={`${style.sectionTitleContent} d-block fw-semibold fs-2`}>{recipes?.data[1]?.title}</span>
              <span className={`${style.underlineTitleRecipe} d-none d-md-block mt-1`}></span>
            </div>
            <div className={`col-12 col-md-10 mt-3 text-secondary ${style.sectionDesc}`}>
              <span>{recipes?.data[1]?.description}</span>
            </div>
            <div className="col-10">
              <button className={`btn btn-warning text-light mt-3 ${style.btnLearnMore}`}>Learn More</button>
            </div>
          </div>
        </div>
      </LandingPageSection>

      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <span className={`fs-2 fw-semibold text-center text-nowrap d-block mx-auto`}>Popular Recipe</span>
            <span className={`${style.borderBottom} d-block mx-auto mt-1`}></span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {isLoading
                ? 'Loading...'
                : recipes?.data?.map((recipe, i) => (
                    <SwiperSlide key={i}>
                      <Link to={`/recipes/${recipe.id}`} className={'position-relative'}>
                        <img className={`${style.imgSwipper}`} src={recipe.photo} crossOrigin={'anonymous'} />
                        <span className={`${style.titleSwipper} fs-4 position-absolute text-light`}>{recipe?.title}</span>
                      </Link>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div id="chat" className={`${style.chatContainer} overflow-hidden chat position-fixed shadow`}>
        <div className="row">
          <div id="chatHeader" className={`col-12 align-self-start d-flex align-items-center justify-content-between px-4 py-2 shadow-sm ${style.chatHeader}`}>
            <span className="text-light">Admin</span>
            <FontAwesomeIcon id="closeChat" className={`${style.closeIcon} text-light me-1 fs-3 d-sm-none`} icon={faXmark} />
          </div>
          <div className={`col-12 ${style.chatBody} px-4 align-self-start d-flex flex-column justify-content-end bg-light gap-2 pb-2`}>
            <span className={`${style.chatSection} ${style.leftSideChat} p-2`}>loremlormlorem</span>
            <span className={`${style.chatSection} ${style.leftSideChat} p-2`}>lorem10asndasldnasldnalsdnasd</span>
            <span className={`${style.chatSection} ${style.rightSideChat} text-end ms-auto p-2`}>loremlormlorem</span>
            <span className={`${style.chatSection} ${style.rightSideChat} text-end ms-auto p-2`}>lorem10asndasldnasldnalsdnasd</span>
          </div>
          <div className={`${style.chatFooter} bg-light align-self-end d-flex align-items-center gap-2 col-12 px-4 py-2`}>
            <input type="text" placeholder="chat here.." className="form-control bg-transparent border-0 shadow-none py-0" />
            <FontAwesomeIcon className="text-light p-2 bg-secondary rounded-circle" icon={faPaperPlane} />
          </div>
        </div>
      </div>

      <FontAwesomeIcon id={'chatIcon'} className={`${style.chatIcon} p-3 shadow border border-2 border-light position-fixed fs-1 text-light rounded-circle d-sm-none`} icon={faCommentDots} />
    </MainLayout>
  );
};

export default Home;
