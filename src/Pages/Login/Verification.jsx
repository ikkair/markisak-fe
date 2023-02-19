import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const Verification = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto mt-5">
                        <div className={style.payment}>
                            <div className={style.payment_header}>
                                <div className={style.check}><i className="fa fa-check" aria-hidden="true"></i></div>
                            </div>
                            <div className={style.content}>
                                <h1 className="font-weight-bold" style={{ fontSize: "40px" }}>Verification Success !</h1>
                                <p>Thanks for keeping Stitch safe! <br/> if you questions you can contact us any time by emailing. </p>
                                <Link to="/">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification