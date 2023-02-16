import React from 'react'
import { Link } from "react-router-dom";
import './notfound.css'
import logo from '../../assets/Authpage/Group.png';

const NotFound = () => {
    return (
        <div>

            <div class="circles">
                <img src={logo} alt="" style={{ marginTop: "100px" }} />
                <p>404<br />
                    <small>PAGE NOT FOUND</small>
                </p>
                <span class="circle big"></span>
                <span class="circle med"></span>
                <span class="circle small"></span>
            </div>
        </div>
    )
}

export default NotFound