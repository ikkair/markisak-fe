import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import examplePicture from '../../assets/detailResep/DetailResep.png'
import Footer from '../../Components/Footer/Footer'
import ButtonVideos from '../../Components/ModalButton/ModalButton'
import style from './style.module.css'
import profil from '../../assets/detailResep/ProfileComment.png'
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth'

const DetailResep = () => {


    return (
        <>
            <Navbar/>
            <main className={`container ${style.contentDetail}`}>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-12 col-sm-12">
                        <h1 className='text-center fw-normal'>Lorem Ipsum</h1>
                        <img src={examplePicture} className={`img-fluid ${style.imageDetail} d-block mx-auto mt-5 mb-5`} alt="" />
                        <h4 className='ingredients fw-semibold mt-5'>Ingredients</h4>
                        <p className='mb-5'> - 2 eggs <br />
                            - 2 tbsp mayonnaise <br />
                            - 3 slices bread <br />
                            - a little butter <br />
                            - ⅓ carton of cress <br />
                            - 2-3 slices of tomato or a lettuce leaf <br />
                            and a slice of ham or cheese <br />
                            - crisps , to serve <br />
                        </p>
                        <h4 className='fw-semibold'>Step Video</h4>
                        <ul className='list-group-numbered'>
                            <li className='list-group-item'><ButtonVideos/></li>
                            <li className='list-group-item'><ButtonVideos/></li>
                            <li className='list-group-item'><ButtonVideos/></li>
                            <li className='list-group-item'><ButtonVideos/></li>
                            <li className='list-group-item'><ButtonVideos/></li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div class="mb-3">
                            <textarea class={`form-control ${style.comment}`} id="exampleFormControlTextarea1" rows="3" placeholder='Comment :'></textarea>
                        </div>

                        <div class={`d-flex justify-content-center text-center ${style.button}`}>
                            <button class={` btn btn-warning `} type="button">Comment</button>
                        </div>

                        {/* <h1>Comment</h1>
                        <div className={`${style.commentList} mt-4`}>
                            <img src={profil} alt="" />
                            <div className={`${style.data} ms-4`}>
                                <p className={`${style.name} fw-bold`}>Ayudia</p>
                                <p>Nice recipe. simple and delicious, thankyou</p>
                            </div>
                        </div> */}

                        {/* <InputFormAuth/> */}
                    </div>
                </div>

                
            </main>
            <Footer/>

        </>
    )
}

export default DetailResep