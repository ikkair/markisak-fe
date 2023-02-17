import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.css';

const Card = ({ item }) => {
  return (
    <Link to={`/recipes/${item.id}`} class={` ${style.card}`}>
      <img src={item?.photo} class="card-img-top" alt="..." />
      <div class={`card-body ${style.cardBody}`}>
        <h5 class="card-title">{item?.name}</h5>
      </div>
    </Link>
  );
};

export default Card;
