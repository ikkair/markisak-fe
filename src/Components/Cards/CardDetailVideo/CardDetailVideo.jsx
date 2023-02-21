import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import style from './style.module.css';

const CardDetailVideo = ({ url, title, time, show }) => {
  const getIdUrlVideo = (url) => {
    return url.split('=')[1];
  };
  return (
    <div className="row mb-3">
      <div className="col-5 col-md-4 col-lg-12">
        <LiteYouTubeEmbed id={getIdUrlVideo(url)} title={title} />
      </div>
      <div className="col-7 col-md-8 col-lg-12 description d-grid">
        <span className={`fw-semibold ${style.videoTitle}`}>{title}</span>
        <span className={`text-secondary ${style.videoTime}`}>{time}</span>
        <span className={`text-secondary ${style.videoTime}`}>{show}</span>
      </div>
    </div>
  );
};

export default CardDetailVideo;
