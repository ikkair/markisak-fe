import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const CardRecipe = ({ item }) => {
  return (
    <Link to={`/recipes/${item.id}`} className={`${style.card}`}>
      <img src={`https://source.unsplash.com/300x30${item.id}/?food`} className={`card-img-top ${style.img}`} alt="..." />
      <div className={`card-body ${style.cardBody}`}>
        <h5 className="card-title">{item?.title}</h5>
      </div>
    </Link>
  );
};

export default CardRecipe;