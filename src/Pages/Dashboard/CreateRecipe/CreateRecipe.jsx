import React, { useState } from 'react';
import { useCreateRecipeMutation, useGetAllRecipeQuery } from '../../../Features/recipe/recipeApi';

const CreateRecipe = () => {
  const { data: dataAllRecipe } = useGetAllRecipeQuery();
  const [createRecipe, { isLoading, error }] = useCreateRecipeMutation();
  const [data, setData] = useState({
    title: '',
    photo: '',
    ingredients: '',
    video: '',
  });

  const onChangeHandler = (e) => {
    console.log(data);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await createRecipe(data);
  };

  return (
    <div>
      <ul>
        {dataAllRecipe?.map((recipe) => (
          <li>
            {recipe.title} <button className="btn btn-danger">Delete</button>{' '}
          </li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={onChangeHandler} />

        <label htmlFor="title">Photo</label>
        <input type="text" name="photo" onChange={onChangeHandler} />

        <label htmlFor="title">Ingredients</label>
        <input type="text" name="ingredients" onChange={onChangeHandler} />

        <label htmlFor="title">Video</label>
        <input type="text" name="video" onChange={onChangeHandler} />

        <input type="submit" value={'kirim'} />
      </form>
    </div>
  );
};

export default CreateRecipe;
