import React from 'react';
import ButtonVideos from '../../Components/ModalButton/ModalButton';
import style from './style.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import MainFooter from '../../Components/Footer/MainFooter';
import InputFormAddRecipe from '../../Components/Form/InputFormAddRecipe/InputFormAddRecipe';
import profil from '../../assets/detailResep/ProfileComment.png';
import { useGetRecipeByIdQuery } from '../../Features/recipe/recipeApi';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
// ..

// import { useGetAllRecipeQuery } from '../../Features/recipe/recipeApi'
import { useCreateLikedRecipeMutation, useDeleteLikedRecipeMutation, useGetLikedRecipeByIdQuery, useGetLikedRecipeByIdUserQuery } from '../../Features/likedRecipe/likedRecipeApi';
import { useCreateSavedRecipeMutation, useGetSavedRecipeByIdQuery } from '../../Features/savedRecipe/savedRecipe';
import { useCreateCommentMutation, useGetAllCommentQuery, useGetCommentByIdRecipeQuery } from '../../Features/comment/commentApi';
import MyVerticallyCenteredModal from '../../Components/ModalButton/ModalButton';
import ModalDelete from '../../Components/ModalDelete';
import { useSelector } from 'react-redux';
import { useGetUserDetailQuery } from '../../Features/user/userApi';

const DetailResep = () => {
  const MySwal = withReactContent(Swal);
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);
  const [createLikedRecipe, { isLoading: loadingLike, error: errorLike }] = useCreateLikedRecipeMutation();
  const [createSavedRecipe, { isLoading: loadingSaved, error: errorSaved }] = useCreateSavedRecipeMutation();
  const [createComment, { isLoading: loadingComment, error: errorComment, isSucces }] = useCreateCommentMutation();
  const { data: likedRecipe, isLoading: isLoadingLikedRecipe, error: errorLikeRecipe } = useGetLikedRecipeByIdUserQuery(id);
  const [deleteLikedRecipe, { isLoading: isLoadingDeleteLikedRecipe, error: errorDeleteLikedRecipe }] = useDeleteLikedRecipeMutation();
  const user = useSelector((state) => state.auth.user);
  const { data: savedRecipe, error: errorSavedRecipe } = useGetSavedRecipeByIdQuery(id);
  console.log(savedRecipe);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  console.log(user?.id.length);

  const [message, setMessage] = useState('');

  // Set Color liked and save
  const [color, setColor] = useState('#EFC81A');
  const [colorl, setColorl] = useState('#dddd');

  // Function setColor like and save
  const changeColor = () => {
    if (color == '#EFC81A') {
      setColor('#ff4646');
    } else {
      setColor('#EFC81A');
    }
  };
  const changeColorl = () => {
    if (colorl == '#dddd') {
      setColorl('#ff4646');
    } else {
      setColorl('#dddd');
    }
  };

  // Change handler
  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const createHandler = async () => {
    await createComment({ message, id_recipe: id });

    MySwal.fire({
      title: <p>Comment added!</p>,
      icon: 'success',
    });

    setMessage('');
  };

  function checkLikeRecipe() {
    if (errorLikeRecipe?.status == 404) {
      return undefined;
    }
    return likedRecipe?.data?.filter((recipe) => recipe.id_recipe == id);
  }

  const onClickLike = async () => {
    if (checkLikeRecipe() || checkLikeRecipe()?.length > 0) {
      await deleteLikedRecipe({ id });
    } else {
      await createLikedRecipe({ id_recipe: id });
    }
  };

  const onClickSave = async () => {
    await createSavedRecipe({ id_recipe: id });
  };

  // console.log(recipe);

  // Ingredients
  let ingredients = `${recipe?.ingredients}`;
  let split = ingredients.split('-');
  split.shift();

  return (
    <>
      <Navbar />
      <main className={`container ${style.contentDetail}`}>
        {isLoading ? (
          'Loading....'
        ) : (
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 col-12 col-sm-12">
              <h1 className="text-center fw-normal" style={{ color: 'rgba(46, 38, 111, 1)' }}>
                {recipe?.title}
              </h1>
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8  position-relative">
                  <img crossOrigin="Anonymous" src={recipe.photo} className={`img-fluid ${style.imageDetail} d-block mx-auto mt-5 mb-5 `} alt="" />
                  <span className={style.action}>
                    <button
                      className={`position-absolute ${style.saved} `}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        onClickSave();
                        changeColor();
                      }}
                    >
                      <i class="fa-sharp fa-solid fa-bookmark"></i>
                    </button>
                    <button
                      className={`position-absolute ${style.liked} ${checkLikeRecipe()?.length > 0 ? 'bg-warning' : 'bg-transparent'} text-light`}
                      style={{ backgroundColor: colorl }}
                      onClick={() => {
                        onClickLike();
                        changeColorl();
                      }}
                    >
                      <i class="fa-solid fa-thumbs-up"></i>
                    </button>
                  </span>
                </div>
              </div>

              <h4 className="ingredients fw-semibold" data-aos="fade-right" data-aos-duration="3000">
                Ingredients
              </h4>
              <ul type="stripe" data-aos="fade-right" data-aos-duration="3000">
                {split.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <h4 className="fw-semibold" data-aos="fade-right" data-aos-duration="3000">
                Step Video
              </h4>
              <div className="row" data-aos="fade-right" data-aos-duration="3000">
                {recipe?.videos?.map((video, index) => (
                  <div key={index} className="col-md-12 col-6">
                    <ul className="list-unstyled">
                      <li className="list-group-item">
                        {/* <p>Step {index + 1}. </p> */}
                        <MyVerticallyCenteredModal link={video.url_video} step={`STEP ${index + 1}`} nameRecipe={recipe.title} />
                      </li>
                    </ul>
                  </div>
                ))}

                <div className="col-md-6 pe-md-0 col-12">
                  <Link className="btn btn-primary w-100" to={`/recipes/videos/${recipe.id}`}>
                    Show more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-md-10 mb-5" data-aos="zoom-in-down" data-aos-duration="3000">
            <InputFormAddRecipe value={message} type={'textarea'} title={'Comment :'} name={'comment'} placeholder={'Comment here'} onchange={(e) => changeHandler(e)} />

            <div class={`d-flex justify-content-center text-center ${style.button}`}>
              {user?.id.length > 0 ? 
              <button class={` btn btn-warning `} type="button" onClick={createHandler}>
              Comment
              </button> :
              <button class={` btn btn-warning `} type="button" onClick={createHandler} disabled>
              Comment
              </button>
            
            
              }
              
            </div>

            {recipe?.comments.length <= 0 ? <h1 style={{ visibility: 'hidden' }}></h1> : <h1>Comments</h1>}

            {/* <h1>{recipe.message}</h1> */}

            {recipe?.comments.map((comment, i) => (
              // console.log(comment.id)
              // console.log(recipe.id)
              <div key={i} className={`${style.commentList} mt-4 `} data-aos="zoom-in-down" data-aos-duration="1000">
                <div className="row">
                  <div className="col-1 d-flex align-items-center">
                    <img crossOrigin="Anonymous" src={comment?.photo} alt="" />
                  </div>

                  <div className="col-xxl-10 col-md-9 col-11 text-start d-grid align-items-center">
                    <div className={`${style.data} ms-4 text-wrap flex-wrap`}>
                      <p className={`${style.name} fw-bold`}>{comment.name}</p>
                      <p className="">{comment?.message}</p>

                      {/* <button className={`position-absolute ${style.delete}`}>Delete</button> */}
                    </div>
                  </div>

                  <div className={`col-3 col-md-2 col-xxl-1 d-grid align-items-center ${style.del}`}>
                    <ModalDelete id={comment.id} idRecipe={recipe.id}>
                      Delete
                    </ModalDelete>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
};

export default DetailResep;
