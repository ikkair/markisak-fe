import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.css';

const CardRecipe = ({ item }) => {
  return (
    <Link to={`/recipes/${item.id}`} className={`${style.card}`}>
      <img src={item.photo} crossOrigin={'anonymous'} className={`card-img-top ${style.img}`} alt="..." />
      <div className={`card-body ${style.cardBody}`}>
        <h5 className="card-title">{item?.title}</h5>
      </div>
    </Link>
  );
};

export default CardRecipe;
