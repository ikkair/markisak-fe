import React, { useEffect, useState } from 'react';
import { useCreateRecipeMutation, useDeleteRecipeByIdMutation, useGetAllRecipeQuery } from '../../../Features/recipe/recipeApi';
import Navbar from './../../../Components/Navbar/Navbar';
import photoLogo from '../../../assets/createRecipe/image.png';
import style from './style.module.css';
import InputFormAddRecipe from './../../../Components/Form/InputFormAddRecipe/InputFormAddRecipe';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../../Components/Footer/MainFooter';

const CreateRecipe = () => {
  const MySwal = withReactContent(Swal);

  const { data: dataAllRecipe } = useGetAllRecipeQuery();
  const [createRecipe, { isLoading, error }] = useCreateRecipeMutation();
  const [deleteRecipe, { error: errorDeleteRecipe, isSuccess }] = useDeleteRecipeByIdMutation();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [videos, setVideos] = useState([
    {
      step: 1,
      url: '',
    },
  ]);
  const [stepVideo, setStepVideo] = useState(1);
  const [data, setData] = useState({
    title: '',
    photo: '',
    ingredients: '',
    video: '',
  });

  const changeVideoHandler = (e, i) => {
    videos[i].url = e.target.value;
  };

  const inputDeleteHandler = (i) => {
    setStepVideo((prev) => prev - 1);
    setVideos((prev) => prev.splice(i, 1));
  };

  const renderInputVideo = () => {
    console.log(videos);
    const inputs = [];
    for (let i = 1; i < stepVideo; i++) {
      inputs.push(
        <>
          <div className="col-2 d-flex gap-2">
            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Step :</span>
            <input type="number" className="text-center text-secondary form-control bg-transparent border-0 border-bottom rounded-0 outline-none" name="video" value={i + 1} disabled />
            {setVideos((prev) => [...videos, { step: i + 1, url: '' }])}
          </div>
          <div className="col-10 d-flex gap-2">
            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Link : </span>
            <input type="text" className="text-secondary form-control bg-transparent border-0 border-bottom rounded-0 outline-none" name="video" onChange={(e) => changeVideoHandler(e, i)} />

            {i == stepVideo - 1 && <FontAwesomeIcon className={`${style.addVideo} bg-light text-secondary rounded-circle p-2`} onClick={() => inputDeleteHandler(i)} icon={faMinus} />}
          </div>
        </>
      );
    }

    return inputs;
  };

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
    if (!error) {
      MySwal.fire({
        title: <p>Product add to Cart!</p>,
        icon: 'success',
      });

      setData({
        title: '',
        photo: '',
        ingredients: '',
        video: '',
      });
    }
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
                <InputFormAddRecipe value={data.title} type={'text'} title={'Title'} name={'title'} onchange={(e) => changeHandler(e)} />
              </div>

              <div className="col-12 col-md-10 offset-md-1 mt-4">
                <InputFormAddRecipe value={data.ingredients} type={'textarea'} title={'Ingredients'} name={'ingredients'} onchange={(e) => changeHandler(e)} />
              </div>

              <div className="col-12 col-md-10 offset-md-1 mt-4">
                <div className={`item rounded ${style.inputBackground} mx-auto d-flex flex-column p-3 px-5 gap-3`} id="thumbnail">
                  <div className="main-video d-flex gap-3">
                    <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Video</span>
                    <input type="text" className="form-control bg-transparent border-0 border-bottom rounded-0 outline-none" name="video" onChange={changeHandler} />

                    <FontAwesomeIcon className={`${style.addVideo} bg-light text-secondary rounded-circle p-2`} onClick={() => setStepVideo((prev) => prev + 1)} icon={faPlus} />
                  </div>

                  <div className="row">{renderInputVideo()?.map((input) => input)}</div>
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
      <Footer />
    </>
  );
};

export default CreateRecipe;
