import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.css';

const CardRecipe = ({ item }) => {
  return (
    <Link to={`/recipes/${item.id}`} className={`${style.card}`}>
      <img src={item.photo} crossOrigin={'anonymous'} className={`img-fluid border border-2 border-light  ${style.img}`} alt="..." />
      <div className={`${style.cardBody} w-100`}>
        <h5 className={`${style.cardTitle} px-2`}>{item?.title} Lorem ipsum dolor sit amet.</h5>
      </div>
    </Link>
  );
};

export default CardRecipe;
