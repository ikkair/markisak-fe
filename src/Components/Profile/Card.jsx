import React from 'react'
import img from '../../assets/Profile/img1.png'
import img2 from "../../assets/Profile/img2.png";
import style from './style.module.css'

const Card = () => {
    return (
        <div>
            <div className='container mb-5'>
                <div className='d-flex'>
                    <div class={`mx-2 ${style.card}`}>
                        <img src={img} class="card-img-top" alt="..." />
                        <div class={`card-body ${style.cardBody}`}>
                            <h5 class="card-title">Bomb Chicken</h5>
                        </div>
                    </div>
                    <div class={`mx-2 ${style.card}`}>
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class={`card-body ${style.cardBody}`}>
                            <h5 class="card-title">Bomb Chicken</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card