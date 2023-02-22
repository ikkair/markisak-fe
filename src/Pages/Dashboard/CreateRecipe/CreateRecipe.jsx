import React, { useEffect, useState } from 'react';
import { useCreateRecipeMutation } from '../../../Features/recipe/recipeApi';
import Navbar from './../../../Components/Navbar/Navbar';
import photoLogo from '../../../assets/createRecipe/image.png';
import style from './style.module.css';
import InputFormAddRecipe from './../../../Components/Form/InputFormAddRecipe/InputFormAddRecipe';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import MainFooter from '../../../Components/Footer/MainFooter';
import { useCreateVideoMutation } from '../../../Features/video/videoApi';

const CreateRecipe = () => {
  const MySwal = withReactContent(Swal);

  const [createRecipe, { error, isSuccess, isError: isErrorCreateRecipe, error: errorCreateRecipe }] = useCreateRecipeMutation();
  const [createVideo, { isLoading: isLoadingCreateVideo, error: errorCreateVideo, isSuccess: isSuccessCreateVideo, isError: isErrorCreateVideo }] = useCreateVideoMutation();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [stepVideo, setStepVideo] = useState(1);
  const [videos, setVideos] = useState([
    {
      step: stepVideo,
      url: '',
    },
  ]);

  const insertAllVideo = (id_recipe) => {
    return Promise.all(
      videos?.map(async (video) => {
        await createVideo({ id_recipe, step: video.step, url_video: video.url });
      })
    );
  };

  const [data, setData] = useState({
    title: '',
    photo: '',
    ingredients: '',
    description: '',
  });

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const changeVideoHandler = (e, i) => {
    videos[i].url = e.target.value;
  };

  const inputDeleteHandler = (i) => {
    setStepVideo((prev) => prev - 1);
    setVideos((prev) => prev.slice(0, i));
  };

  const incrementVideos = () => {
    setStepVideo((prev) => prev + 1);
    setVideos((prev) => [...prev, { step: stepVideo + 1, url: '' }]);
  };

  const createHandler = async () => {
    setLoading(true);

    const formData = new FormData();
    for (let attr in data) {
      formData.append(attr, data[attr]);
    }

    const response = await createRecipe(formData);
    const idRecipe = response.data.data[0].id;
    if (videos[0].url) {
      await insertAllVideo(idRecipe);
    }
    setLoading(false);

    setData({
      title: '',
      photo: '',
      ingredients: '',
      description: '',
    });
  };

  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: 'Loading...',
        html: 'Recipe was create, Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }

    if (isSuccess) {
      Swal.close();
      MySwal.fire({
        title: <p>Success create recipe!</p>,
        icon: 'success',
      });
    }
  }, [loading]);

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
    setData((prev) => {
      return {
        ...prev,
        photo: e.target.files[0],
      };
    });
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

  const renderInputVideo = () => {
    const inputs = [];
    for (let i = 1; i < stepVideo; i++) {
      inputs.push(
        <>
          <div className="col-6 col-md-3 col-lg-2 d-flex gap-2">
            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Step :</span>
            <input type="number" className="text-center text-secondary form-control bg-transparent border-0 border-bottom rounded-0 outline-none" name="video" value={i + 1} disabled />
          </div>
          <div className="col-12 col-md-9 col-lg-10 d-flex gap-2">
            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Link : </span>
            <input type="text" className="text-secondary form-control bg-transparent border-0 border-bottom rounded-0 outline-none" name="video" onChange={(e) => changeVideoHandler(e, i)} />

            {i == stepVideo - 1 && <FontAwesomeIcon className={`${style.addVideo} bg-light text-secondary rounded-circle p-2`} onClick={() => inputDeleteHandler(i)} icon={faMinus} />}
          </div>
        </>
      );
    }

    return inputs;
  };

  return (
    <>
      <Navbar />
      <div id="content" className="container mt-4 pb-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1 d-flex justify-content-center">
                <div className={`item w-100 rounded ${style.inputBackground} ${style.inputPhoto} d-flex mx-auto justify-content-center align-items-center mb-2 flex-column mt-5`} onClick={imageClickHandler} id="thumbnail">
                  <img src={preview ? preview : photoLogo} alt="" className="img-fluid" />
                  <span className="text-secondary mt-2">Add Photo</span>

                  <input type="file" className="d-none" name="photo1" onChange={selectFile} id={`photo`} />
                </div>
              </div>

              <div className="col-12 col-lg-10 offset-lg-1 mt-4">
                <InputFormAddRecipe value={data.title} type={'text'} title={'Title'} name={'title'} onchange={(e) => changeHandler(e)} />
              </div>

              <div className="col-12 col-lg-10 offset-lg-1 mt-4">
                <InputFormAddRecipe value={data.ingredients} type={'textarea'} placeholder={'use a strip (-) for each ingredient'} title={'Ingredients'} name={'ingredients'} onchange={(e) => changeHandler(e)} />
              </div>

              <div className="col-12 col-lg-10 offset-lg-1 mt-4">
                <InputFormAddRecipe value={data.description} type={'textarea'} title={'Description'} name={'description'} onchange={(e) => changeHandler(e)} />
              </div>

              <div className="col-12 col-lg-10 offset-lg-1 mt-4">
                <div className={`item rounded ${style.inputBackground} mx-auto d-flex flex-column p-3 px-5 gap-3`} id="thumbnail">
                  <div className="main-video d-flex gap-3">
                    <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Video</span>
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 border-bottom rounded-0 outline-none"
                      name="video"
                      onChange={(e) => {
                        console.log(videos);
                        videos[0].url = e.target.value;
                      }}
                    />

                    <FontAwesomeIcon className={`${style.addVideo} bg-light text-secondary rounded-circle p-2`} onClick={() => incrementVideos()} icon={faPlus} />
                  </div>

                  <div className="row">{renderInputVideo()?.map((input) => input)}</div>
                </div>
              </div>

              <div className="col-12 col-lg-10 offset-lg-1 mt-5 d-flex justify-content-center">
                <button className="btn btn-warning w-50 text-light" onClick={createHandler} disabled={!(data.title && data.photo && data.description && data.ingredients)}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default CreateRecipe;
