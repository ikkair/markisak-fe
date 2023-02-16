import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import CardDetailVideo from '../../Components/Cards/CardDetailVideo/CardDetailVideo';
import style from './style.module.css';

const DetailVideo = () => {
  const getIdUrlVideo = (url) => {
    return url.split('=')[1];
  };

  return (
    <main className={style.mainContent}>
      <Navbar />
      <div className={`row ${style.mainSection} overflow-hidden`}>
        <div className="col-12">
          <div className={`container ${style.containerContent} `}>
            <div className="row">
              <div className="col-12 col-lg-9 mb-3">
                {' '}
                <LiteYouTubeEmbed id={getIdUrlVideo('https://www.youtube.com/watch?v=PMhfLy_buV8')} title="What’s new in Material Design for the web (Chrome Dev Summit 2019)" />
                <div className="description mt-3 d-grid">
                  <span className="fw-semibold fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deleniti. Magni, deleniti.</span>
                  <span className="text-secondary">3 months ago</span>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <span className="title fw-semibold fs-4 d-block mb-2">Next</span>
                <div className={`section-video ${style.videoSection}`}>
                  <CardDetailVideo url={'https://www.youtube.com/watch?v=PMhfLy_buV8'} title={'What’s new in Material Design for the web (Chrome Dev Summit 2019)'} time={'3 Months ago'} />

                  <CardDetailVideo url={'https://www.youtube.com/watch?v=WsdNmAkXmCQ'} title={'What’s new in Material Design for the web (Chrome Dev Summit 2019)'} time={'3 Months ago'} />

                  <CardDetailVideo url={'https://www.youtube.com/watch?v=9m7YHjBeduA'} title={'MUKBANG 7 BUNGKUS NASI PADANG PORSI JUMB0!!'} time={'3 Months ago'} />

                  <CardDetailVideo url={'https://www.youtube.com/watch?v=9m7YHjBeduA'} title={'MUKBANG 7 BUNGKUS NASI PADANG PORSI JUMB0!!'} time={'3 Months ago'} />

                  <CardDetailVideo url={'https://www.youtube.com/watch?v=9m7YHjBeduA'} title={'MUKBANG 7 BUNGKUS NASI PADANG PORSI JUMB0!!'} time={'3 Months ago'} />

                  <CardDetailVideo url={'https://www.youtube.com/watch?v=9m7YHjBeduA'} title={'MUKBANG 7 BUNGKUS NASI PADANG PORSI JUMB0!!'} time={'3 Months ago'} />
                  <CardDetailVideo url={'https://www.youtube.com/watch?v=9m7YHjBeduA'} title={'MUKBANG 7 BUNGKUS NASI PADANG PORSI JUMB0!!'} time={'3 Months ago'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailVideo;
