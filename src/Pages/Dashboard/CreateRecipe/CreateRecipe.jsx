import React, { useState } from 'react';
import { useCreateRecipeMutation } from '../../../Features/recipe/recipeApi';

const CreateRecipe = () => {
  const [createNewRecipe, { isLoading, isSuccess, error }] = useCreateRecipeMutation();
  const [data, setData] = useState({
    title: '',
    photo: '',
    ingredients: '',
    video: '',
  });

  const onChangeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await createNewRecipe(data);
  };

  return (
    <div>
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
