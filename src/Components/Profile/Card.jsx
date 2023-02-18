import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = ({ item }) => {
  return (
    <Link to={`/recipes/${item.id}`} className={`${style.card}`}>
      <img src={`https://source.unsplash.com/300x30${item.id}/?food`} className={`card-img-top ${style.img}`} alt="..." />
      
      <Link><FontAwesomeIcon className={`card-title mx-1 bg-success ${style.cardEdit}`} icon={faPenToSquare} /></Link>
        <Link><FontAwesomeIcon className={`card-title mx-1 bg-danger ${style.cardDelete}`} icon={faTrash} /></Link>
      <div className={`card-body ${style.cardBody}`}>
        <h5 className="card-title">{item?.title}</h5>
      </div>
    </Link>
  );
};

export default Card;
