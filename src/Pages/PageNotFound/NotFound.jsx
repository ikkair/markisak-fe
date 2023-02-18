import React from 'react'
import { Link } from "react-router-dom";
import './notfound.css'
import logo from '../../assets/Authpage/Group.png';
import home from '../../assets/page404/home.png'

const NotFound = () => {
    return (
        <div>
            <div class="circles">
                <img src={logo} alt="" style={{ marginTop: "100px" }} />
                <p>404<br />
                    <small>PAGE NOT FOUND<br />
                        <Link to="/" className="text-center" style={{ color: 'black', fontSize: "40px" }}>
                            <img src={home} alt="" style={{ width: "100px" }} />Home
                        </Link>
                    </small>
                </p>
                <span class="circle big"></span>
                <span class="circle med"></span>
                <span class="circle small"></span>
                <div className="footer"></div>

            </div>
        </div>
    )
}

export default NotFound