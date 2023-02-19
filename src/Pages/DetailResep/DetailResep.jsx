import React from 'react';
import ButtonVideos from '../../Components/ModalButton/ModalButton';
import style from './style.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import MainFooter from '../../Components/Footer/MainFooter';
import InputFormAddRecipe from '../../Components/Form/InputFormAddRecipe/InputFormAddRecipe';
import profil from '../../assets/detailResep/ProfileComment.png';
import { useGetRecipeByIdQuery } from '../../Features/recipe/recipeApi';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// import { useGetAllRecipeQuery } from '../../Features/recipe/recipeApi'
import { useCreateLikedRecipeMutation } from '../../Features/likedRecipe/likedRecipeApi';
import { useCreateSavedRecipeMutation } from '../../Features/savedRecipe/savedRecipe';
import { useCreateCommentMutation, useGetAllCommentQuery, useGetCommentByIdRecipeQuery } from '../../Features/comment/commentApi';
import MyVerticallyCenteredModal from '../../Components/ModalButton/ModalButton';
import ModalDelete from '../../Components/ModalDelete';

const DetailResep = () => {
  const MySwal = withReactContent(Swal);
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);
  const [createLikedRecipe, { isLoading: loadingLike, error: errorLike }] = useCreateLikedRecipeMutation();
  const [createSavedRecipe, { isLoading: loadingSaved, error: errorSaved }] = useCreateSavedRecipeMutation();
  const [createComment, { isLoading: loadingComment, error: errorComment, isSucces }] = useCreateCommentMutation();

  // const { data : comment } = useGetAllCommentQuery(id)
  // console.log(recipe?.id_user)
  console.log(recipe?.comments);


  const [message, setMessage] = useState('');
  // console.log(`${message}`);

  // console.log(errorComment);
  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const createHandler = async () => {
    // console.log({ message, id_recipe: id, id_user: "1" });
    await createComment({ message, id_recipe: id });

    MySwal.fire({
      title: <p>Comment added!</p>,
      icon: 'success',
    });

    setMessage('');

  };

  const onClickLike = async () => {
    await createLikedRecipe({ id_recipe: id });
  };

  const onClickSave = async () => {
    await createSavedRecipe({ id_recipe: id });
  };

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
                {recipe.title}
              </h1>
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8  position-relative">
                  <img crossOrigin='Anonymous' src={recipe.photo} className={`img-fluid ${style.imageDetail} d-block mx-auto mt-5 mb-5 `} alt="" />
                  <span className={style.action}>
                    <button className={`position-absolute ${style.saved}`} onClick={onClickSave}>
                      <i class="fa-sharp fa-solid fa-bookmark"></i>
                    </button>
                    <button className={`position-absolute ${style.liked}`} onClick={onClickLike}>
                      <i class="fa-solid fa-thumbs-up"></i>
                    </button>
                  </span>
                </div>
              </div>

              <h4 className="ingredients fw-semibold ">Ingredients</h4>
              <p className="mb-5">{recipe.ingredients}</p>
              <h4 className="fw-semibold">Step Video</h4>
              <div className="row">

                {recipe?.videos?.map((video, index) => (
                  <>
                    {/* console.log(video.url_video); */}

                    <div className="col-md-12 col-6">
                      <ul className="list-unstyled">
                        <li className="list-group-item">
                          {/* <p>Step {index + 1}. </p> */}
                          <MyVerticallyCenteredModal
                            link={video.url_video}
                            step={`STEP ${index + 1}`}
                            nameRecipe = {recipe.title}
                          />
                        </li>
                      </ul>
                    </div>
                  </>
                ))}

              </div>
            </div>
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-md-10 mb-5">
            <InputFormAddRecipe value={message} type={'textarea'} title={'Comment :'} name={'comment'} placeholder={'Comment here'} onchange={(e) => changeHandler(e)} />
            {/* <div class="mb-3">
                            <textarea class={`form-control ${style.comment}`} id="exampleFormControlTextarea1" rows="3" placeholder='Comment :'></textarea>
                        </div> */}

            <div class={`d-flex justify-content-center text-center ${style.button}`}>
              <button class={` btn btn-warning `} type="button" onClick={createHandler}>
                Comment
              </button>
            </div>


            {recipe?.comments.length <= 0 ? (
              <h1 style={{ visibility: "hidden" }}></h1>
            ) : (
              <h1>Comments</h1>
            )}

            {/* <h1>{recipe.message}</h1> */}

            {recipe?.comments.map(comment => (
              // console.log(comment.id)
              // console.log(recipe.id)
              <div className={`${style.commentList} mt-4`}>
                <div className="row">
                  <div className="col-1 d-flex align-items-center">
                    <img crossOrigin='Anonymous' src={profil} alt="" />
                  </div>

                  <div className="col-xxl-10 col-md-9 col-11 text-start d-grid align-items-center">
                    <div className={`${style.data} ms-4 text-wrap flex-wrap`}>
                      <p className={`${style.name} fw-bold`}>{comment.name}</p>
                      <p className=''>{comment?.message}</p>


                      {/* <button className={`position-absolute ${style.delete}`}>Delete</button> */}
                    </div>
                  </div>
                  
                  <div className={`col-3 col-md-2 col-xxl-1 d-grid align-items-center ${style.del}`}>
                    <ModalDelete
                      id={comment.id}
                      idRecipe={recipe.id}
                    >
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