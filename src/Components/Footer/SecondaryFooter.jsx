import React from 'react';
import style from '../Footer/style.module.css';
import { Link } from "react-router-dom";

const SecondaryFooter = () => {
    return (
        <div>
            <div className={`text-secondary ${style.secondaryFooter}`}>
                <ul className={`list-inline text-center ${style.listInlineSecondary}`}>
                    <li className="list-inline-item mx-3">
                        <Link className={`list-link ${style.listLink}`} to="#">Product</Link>
                    </li>
                    <li className="list-inline-item mx-3">
                        <Link className={`list-link ${style.listLink}`} to="#">Company</Link>
                    </li>
                    <li className="list-inline-item mx-3">
                        <Link className={`list-link ${style.listLink}`} to="#">Learn More</Link>
                    </li>
                    <li className="list-inline-item mx-3">
                        <Link className={`list-link ${style.listLink}`} to="#">Laptop</Link>
                    </li>
                    <li className="list-inline-item mx-3">
                        <Link className={`list-link ${style.listLink}`} to="#">get in touch</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SecondaryFooter