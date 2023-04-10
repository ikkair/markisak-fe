import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDeleteRecipeByIdMutation } from '../../Features/recipe/recipeApi';

const Card = ({ item, onclick, ondelete, type }) => {
  const deleteHandler = async () => {
    ondelete(item.id);
  };

  return (
    <div className={`${style.card} rounded`}>
      <Link to={`/recipes/${item.id}`}>
        <img src={item.photo} className={`img-fluid ${style.img}`} alt="..." />
      </Link>

      <Link to={`/dashboard/my-recipe/${item.id}`}>{type == 'my-recipe' ? <FontAwesomeIcon className={`card-title mx-1 bg-success ${style.cardEdit}`} icon={faPenToSquare} /> : ''}</Link>
      <FontAwesomeIcon className={`card-title mx-1 bg-danger ${style.cardDelete}`} icon={faTrash} onClick={deleteHandler} />
      <div className={`card-body ${style.cardBody}`}>
        <h5 className={`${style.cardTitle} card-title`}>{item?.title}</h5>
      </div>
    </div>
  );
};

export default Card;
