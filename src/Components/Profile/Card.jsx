import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/Profile/img1.png'
import img2 from "../../assets/Profile/img2.png";
import style from './style.module.css'

let Cards = [
    {
        name: "Bomb Chicken",
        photo: `${img}`
    },
    {
        name: "Bananas Pancake",
        photo: `${img2}`
    }
];

const Card = () => {
    return (
        <div>
            <div className='container mb-5'>
                <div className='d-flex'>
                    {Cards.map((item) => (
                        <>
                            <Link class={`mx-2 ${style.card}`} to="#">
                                <img src={item.photo} class="card-img-top" alt="..." />
                                <div class={`card-body ${style.cardBody}`}>
                                    <h5 class="card-title">{item.name}</h5>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card