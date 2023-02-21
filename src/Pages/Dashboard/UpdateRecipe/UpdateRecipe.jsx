import React, { useEffect, useState } from 'react';
import { useCreateRecipeMutation, useGetRecipeByIdQuery, useUpdateRecipeByIdMutation } from '../../../Features/recipe/recipeApi';
import Navbar from './../../../Components/Navbar/Navbar';
import photoLogo from '../../../assets/createRecipe/image.png';
import style from './style.module.css';
import InputFormAddRecipe from './../../../Components/Form/InputFormAddRecipe/InputFormAddRecipe';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import MainFooter from '../../../Components/Footer/MainFooter';
import { useParams } from 'react-router-dom';

const UpdateRecipe = () => {
  const MySwal = withReactContent(Swal);
  const { id } = useParams();

  const [selectedFile, setSelectedFile] = useState();
  const { data: recipe, isLoading, error, isSuccess } = useGetRecipeByIdQuery(id);
  const [updateRecipeById, { isSuccess: isSuccessUpdate }] = useUpdateRecipeByIdMutation();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState();
  const [stepVideo, setStepVideo] = useState(1);
  const [videos, setVideos] = useState([]);
  const [data, setData] = useState({
    title: '',
    photo: recipe?.photo,
    ingredients: '',
    description: '',
  });

  useEffect(() => {
    if (isSuccess) {
      for (let i = 0; i < recipe?.videos?.length; i++) {
        setVideos((prev) => {
          return [
            ...prev,
            {
              step: recipe?.videos[i].step,
              url_video: recipe?.videos[i].url_video,
            },
          ];
        });
      }

      for (let attr in recipe) {
        if (attr == 'title' || attr == 'ingredients' || attr == 'photo' || attr == 'description') {
          setData((prev) => {
            return {
              ...prev,
              [attr]: recipe[attr],
            };
          });
        }
      }
    }
  }, [isSuccess]);

  const changeVideoHandler = (e, i) => {
    setVideos((prev) => {
      const data = {
        ...prev[i],
        url_video: e.target.value,
      };
      return data;
    });
  };

  function showLoading() {
    Swal.fire({
      title: 'Loading...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  const updateHandler = async () => {
    setLoading(true);
    const formData = new FormData();
    for (let attr in data) {
      formData.append(attr, data[attr]);
    }

    await updateRecipeById({ id, data: formData });
    setLoading(false);
  };

  const inputDeleteHandler = (i) => {
    setStepVideo((prev) => prev - 1);
    setVideos((prev) => prev.slice(0, i));
  };

  const incrementVideos = () => {
    setStepVideo((prev) => prev + 1);
    setVideos((prev) => [...prev, { step: stepVideo + 1, url: '' }]);
  };

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
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
    setData((prev) => {
      return {
        ...prev,
        photo: e.target.files[0],
      };
    });
  };

  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: 'Loading...',
        html: 'Recipe are being changed, Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }

    if (isSuccessUpdate) {
      MySwal.fire({
        title: <p>Success Update recipe!</p>,
        icon: 'success',
      });
    }
  }, [loading]);

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
    for (let i = 0; i < videos?.length - 1; i++) {
      inputs.push(
        <>
          <div className="col-6 col-md-3 col-lg-2 d-flex gap-2">
            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Step :</span>
            <input type="number" className="text-center text-secondary form-control bg-transparent border-0 border-bottom rounded-0 outline-none" name="video" value={videos[i + 1]?.step} disabled />
          </div>
          <div className="col-12 col-md-9 col-lg-10 d-flex gap-2">
            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Link : </span>
            <input type="text" className="text-secondary form-control bg-transparent border-0 border-bottom rounded-0 outline-none" value={videos[i + 1]?.url_video} name="video" onChange={(e) => changeVideoHandler(e, i)} disabled={true} />

            {/* {i == stepVideo - 1 && <FontAwesomeIcon className={`${style.addVideo} bg-light text-secondary rounded-circle p-2`} onClick={() => inputDeleteHandler(i)} icon={faMinus} />} */}
          </div>
        </>
      );
    }

    return inputs;
  };

  return (
    <>
      <Navbar />
      {isLoading
        ? showLoading()
        : (Swal.close(),
          (
            <>
              <div className="container mt-4 pb-5">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 col-lg-10 offset-lg-1 d-flex justify-content-center">
                        <div className={`item w-100 rounded ${style.inputBackground} ${style.inputPhoto} d-flex mx-auto justify-content-center align-items-center mb-2 flex-column mt-5`} onClick={imageClickHandler} id="thumbnail">
                          <img src={preview ? preview : data.photo ? data.photo : photoLogo} crossOrigin={'anonymous'} alt="" className="img-fluid" />
                          <span className="text-secondary mt-2">Add Photo</span>

                          <input type="file" className="d-none" name="photo1" onChange={selectFile} id={`photo`} />
                        </div>
                      </div>

                      <div className="col-12 col-lg-10 offset-lg-1 mt-4">
                        <InputFormAddRecipe value={data?.title} type={'text'} title={'Title'} name={'title'} onchange={(e) => changeHandler(e)} />
                      </div>

                      <div className="col-12 col-lg-10 offset-lg-1 mt-4">
                        <InputFormAddRecipe value={data?.ingredients} type={'textarea'} title={'Ingredients'} name={'ingredients'} onchange={(e) => changeHandler(e)} />
                      </div>

                      <div className="col-12 col-lg-10 offset-lg-1 mt-4">
                        <InputFormAddRecipe value={data?.description} type={'textarea'} title={'Description'} name={'description'} onchange={(e) => changeHandler(e)} />
                      </div>

                      <div className="col-12 col-lg-10 offset-lg-1 mt-4">
                        <div className={`item rounded ${style.inputBackground} mx-auto d-flex flex-column p-3 px-5 gap-3`} id="thumbnail">
                          <div className="main-video d-flex gap-3">
                            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">Video</span>
                            <input
                              type="text"
                              className="form-control bg-transparent border-0 border-bottom rounded-0 outline-none"
                              name="video"
                              value={videos[0]?.url_video}
                              onChange={(e) => {
                                changeHandler(e, 0);
                              }}
                              disabled={true}
                            />

                            {/* <FontAwesomeIcon className={`${style.addVideo} bg-light text-secondary rounded-circle p-2`} onClick={() => incrementVideos()} icon={faPlus} /> */}
                          </div>

                          <div className="row">{renderInputVideo()?.map((input) => input)}</div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-10 offset-lg-1 mt-5 d-flex justify-content-center">
                        <button className="btn btn-warning w-50 text-light" onClick={updateHandler} disabled={!(data.title && data.photo && data.description && data.ingredients)}>
                          Update Recipe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <MainFooter />
            </>
          ))}
    </>
  );
};

export default UpdateRecipe;
