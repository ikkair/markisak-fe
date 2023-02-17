import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/Profile/avatar.png';
import SecondaryFooter from '../../../Components/Footer/SecondaryFooter';
import Navbar from '../../../Components/Navbar/Navbar';
import Card from '../../../Components/Profile/Card';
import style from './style.module.css';
import img from '../../../assets/Profile/img1.png';
import img2 from '../../../assets/Profile/img2.png';
import { useGetAllRecipeQuery } from '../../../Features/recipe/recipeApi'

const Profile = () => {
  // let Cards = [
  //   {
  //     id: 1,
  //     name: 'Bomb Chicken',
  //     photo: `${img}`,
  //   },
  //   {
  //     id: 2,
  //     name: 'Bananas Pancake',
  //     photo: `${img2}`,
  //   },

  //   {
  //     id: 3,
  //     name: 'Bananas Pancake',
  //     photo: `${img2}`,
  //   },

  //   {
  //     id: 4,
  //     name: 'Bananas Pancake',
  //     photo: `${img2}`,
  //   },
  // ];

  const { data: recipes, isLoading, error } = useGetAllRecipeQuery();
  console.log(recipes);
  return (
    <div>
      <Navbar />
      <div className="container mt-5 mb-2 min-vh-100">
        <div className="row">
          <div className="profil text-center py-5">
            <img className="rounded-circle mb-3" width={95} height={90} src={profile} alt="img" />
            <h3>Garneta Sharina</h3>
          </div>

          <div className="text-secondary">
            <ul className="list-inline mt-3 sm-4">
              <li className="list-inline-item mx-3">
                <Link className={`list-link ${style.listProfil}`} to="#">
                  My Recipe
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className={`list-link ${style.listProfil}`} to="#">
                  Saved Recipe
                </Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link className={`list-link ${style.listProfil}`} to="#">
                  Liked Recipe
                </Link>
              </li>
            </ul>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
            {isLoading
              ? 'Loading...'
              : recipes?.map((recipe, i) => (
                <Card key={i} item={recipe} />
              ))}
          </div>
        </div>
      </div>
      <SecondaryFooter />
    </div>
  );
};

export default Profile;
