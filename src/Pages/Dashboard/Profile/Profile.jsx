import React from 'react'
import { Link } from 'react-router-dom';
import profile from '../../../assets/Profile/avatar.png'
import SecondaryFooter from '../../../Components/Footer/SecondaryFooter';
import Navbar from '../../../Components/Navbar/Navbar';
import Card from '../../../Components/Profile/Card';
import style from './style.module.css'

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className='container mb-2'>
                <div className='row'>
                    <div className="profil text-center py-5">
                        <img className="rounded-circle mb-3" width={95} height={90} src={profile} alt="img" />
                        <h3>Garneta Sharina</h3>
                    </div>

                    <div className="text-secondary">
                        <ul className="list-inline mt-3 sm-4">
                            <li className="list-inline-item mx-3">
                                <Link className={`list-link ${style.listProfil}`} to="#">My Recipe</Link>
                            </li>
                            <li className="list-inline-item mx-2">
                                <Link className={`list-link ${style.listProfil}`} to="#">Saved Recipe</Link>
                            </li>
                            <li className="list-inline-item mx-3">
                                <Link className={`list-link ${style.listProfil}`} to="#">Liked Recipe</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Card />
            <SecondaryFooter />
        </div>
    )
}

export default Profile