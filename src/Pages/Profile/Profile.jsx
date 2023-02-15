import React from 'react';
import Navbar from './../../Components/Navbar/Navbar';
import Card from '../../Components/Profile/Card';
import SectionFooter from '../../Components/Footer/SectionFooter';
import profile from '../../assets/Profile/avatar.png';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="container mb-2">
        <div className="row">
          <div className="profil text-center py-5">
            <img className="rounded-circle mb-3" width={95} height={90} src={profile} alt="img" />
            <h3>Garneta Sharina</h3>
          </div>

          <div className="text-secondary">
            <ul class="list-inline mt-3 sm-4">
              <li class="list-inline-item mx-3">My Recipe</li>
              <li class="list-inline-item mx-2">Saved Recipe</li>
              <li class="list-inline-item mx-3">Liked Recipe</li>
            </ul>
          </div>
        </div>
      </div>
      <Card />
      <SectionFooter />
    </div>
  );
};

export default Profile;
