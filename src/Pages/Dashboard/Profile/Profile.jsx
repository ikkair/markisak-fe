import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/Profile/avatar.png';
import SecondaryFooter from '../../../Components/Footer/SecondaryFooter';
import Navbar from '../../../Components/Navbar/Navbar';
import Card from '../../../Components/Profile/Card';
import style from './style.module.css';
import img from '../../../assets/Profile/img1.png';
import img2 from '../../../assets/Profile/img2.png';
import { useGetAllRecipeQuery, useDeleteRecipeByIdMutation, useGetRecipeByIdQuery } from '../../../Features/recipe/recipeApi';
import { useGetUserDetailQuery, useUpdateUserByIdMutation } from '../../../Features/user/userApi';
import ModalEditProfile from '../../../Components/Profile/ModalEditProfile';

const Profile = () => {
  const { data: user, isLoading, isSuccess } = useGetUserDetailQuery(localStorage.getItem('id_user'));
  const [updateUserById, {isSuccess: isSuccessUpdate}] = useUpdateUserByIdMutation();
  const [dataRow, setDataRow] = useState('my-recipe');
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState({
  //   name: '',
  //   phone_number: '',
  // });

  

  // const updateHandler = async () => {
  //   setLoading(true);
  //   const formData = new FormData();
  //   for (let attr in user) {
  //     formData.append(attr, user[attr]);
  //   }
  //   console.log(user.id);

  //   await updateUserById({ id, data: formData });
  //   setLoading(false);
  // };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 mb-2 min-vh-100">
        <div className="row">
          <div className="profil text-center py-5">
            <div className="d-flex justify-content-center">
              {/* <img className="rounded-circle mb-1 ms-5" width={95} height={90} src={profile} alt="img" /> */}
              <img className="rounded-circle mb-1 ms-5" width={95} height={90} src={user?.photo} crossOrigin={'anonymous'} alt="" />
              {!isLoading && <ModalEditProfile id={user.id} />}
            </div>
            <h3>{user?.name}</h3>
          </div>

          <div className="text-secondary">
            <ul className="list-inline mt-3 sm-4">
              <li className="list-inline-item mx-3" onClick={() => setDataRow('my-recipe')}>
                <Link className={`list-link ${style.listProfil}`} to="#">
                  My Recipe
                </Link>
              </li>
              <li className="list-inline-item mx-2" onClick={() => setDataRow('saved')}>
                <Link className={`list-link ${style.listProfil}`} to="#">
                  Saved Recipe
                </Link>
              </li>
              <li className="list-inline-item mx-3" onClick={() => setDataRow('likes')}>
                <Link className={`list-link ${style.listProfil}`} to="#">
                  Liked Recipe
                </Link>
              </li>
            </ul>
          </div>
          <div className="row mx-auto justfy-content-between">
            {isLoading
              ? 'Loading...'
              : dataRow == 'my-recipe'
              ? user?.recipes?.map((recipe, i) => (
                  <div key={i} className="col-6 px-1 col-sm-4 col-md-3 mb-2">
                    <Card item={recipe} />
                  </div>
                ))
              : dataRow == 'saved'
              ? user?.saved?.map((recipe, i) => (
                  <div key={i} className="col-6 px-1 col-sm-4 col-md-3 mb-2">
                    <Card item={recipe} />
                  </div>
                ))
              : user?.likes?.map((recipe, i) => (
                  <div key={i} className="col-6 px-1 col-sm-4 col-md-3 mb-2">
                    <Card item={recipe} />
                  </div>
                ))}
          </div>
        </div>
      </div>
      <SecondaryFooter />
    </div>
  );
};

export default Profile;
