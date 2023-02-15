import React, { useEffect, useState } from 'react';
import { useCreateRecipeMutation, useDeleteRecipeByIdMutation, useGetAllRecipeQuery } from '../../../Features/recipe/recipeApi';
import Navbar from './../../../Components/Navbar/Navbar';
import photoLogo from '../../../assets/createRecipe/image.png';
import style from './style.module.css';
import InputFormAddRecipe from './../../../Components/Form/InputFormAddRecipe/InputFormAddRecipe';

const CreateRecipe = () => {
  const { data: dataAllRecipe } = useGetAllRecipeQuery();
  const [createRecipe, { isLoading, error }] = useCreateRecipeMutation();
  const [deleteRecipe, { error: errorDeleteRecipe, isSuccess }] = useDeleteRecipeByIdMutation();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    title: '',
    photo: '',
    ingredients: '',
    video: '',
  });

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const createHandler = async () => {
    await createRecipe({ ...data, photo: preview });
  };

  function imageClickHandler(e) {
    const inputImg = document.querySelector(`#photo`);
    inputImg.click();
  }

  const selectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setSelectedFile(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <>
      <Navbar />
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 ">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 d-flex justify-content-center">
                <div className={`item w-100 rounded ${style.inputBackground} ${style.inputPhoto} d-flex mx-auto justify-content-center align-items-center mb-2 flex-column mt-5`} onClick={imageClickHandler} id="thumbnail">
                  <img src={preview ? preview : photoLogo} alt="" className="img-fluid" />
                  <span className="text-secondary mt-2">Add Photo</span>

                  <input type="file" className="d-none" name="photo1" onChange={selectFile} id={`photo`} />
                </div>
              </div>

              <div className="col-12 col-md-10 offset-md-1 mt-4">
                <InputFormAddRecipe type={'text'} title={'Title'} name={'title'} onchange={(e) => changeHandler(e)} />
              </div>

              <div className="col-12 col-md-10 offset-md-1 mt-4">
                <InputFormAddRecipe type={'textarea'} title={'Ingredients'} name={'ingredients'} onchange={(e) => changeHandler(e)} />
              </div>

              <div className="col-12 col-md-10 offset-md-1 mt-4">
                <div className={`item rounded ${style.inputBackground} mx-auto d-flex p-3 px-5 gap-3`} id="thumbnail">
                  <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Video</span>
                  <input type="text" className="form-control bg-transparent border-0 border-bottom rounded-0 outline-none" name="video" onChange={changeHandler} />
                </div>
              </div>

              <div className="col-12 col-md-10 offset-md-1 mt-5 d-flex justify-content-center">
                <button className="btn btn-warning w-50 text-light" onClick={createHandler}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
