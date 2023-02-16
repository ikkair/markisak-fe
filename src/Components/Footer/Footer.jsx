import React from "react";
// import style from '../Footer/style.module.css'

const Footer = () => {
    return (
        <div>
            <footer className="container-fluid" style={{ backgroundColor: "#EFC81A", height: "400px" }}>
                <div className="row">
                    <div className="d-flex justify-content-center" style={{ color: "#2E266F", marginTop: "100px" }}>
                        <h1>Eat, Cook, Repeat</h1>
                    </div>
                    <p className="text-secondary d-flex justify-content-center mt-3">
                        Share your best recipe by uploading here !
                    </p>
                    <div className="text-secondary text-center">
                        <ul class="list-inline" style={{ marginTop: "120px" }}>
                            <li class="list-inline-item">Product</li>
                            <li class="list-inline-item">Company</li>
                            <li class="list-inline-item">Learn More</li>
                            <li class="list-inline-item">Laptop</li>
                            <li class="list-inline-item">get in touch</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
