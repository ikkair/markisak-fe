import React from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useGetUserDetailQuery } from "../../Features/user/userApi"

const ModalEditProfile = (id, name, phone_number) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedFile, setSelectedFile] = useState();
    const { data: user } = useGetUserDetailQuery(localStorage.getItem('id_user'));
    console.log(user);

    const [data, setData] = useState({
        name: '',
        phone_number: '',
        photo: '',
    });

    const changeHandler = (e) => {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const selectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
    };

    return (
        <div>
            <>
                <button className="btn btn-secondary btn-sm" style={{ marginRight: "10px" }} onClick={handleShow}>
                    Edit Profile
                </button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>

                    <form onSubmit={changeHandler}>
                        <Modal.Body>
                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="name"
                                name="name"
                                value={user.name}
                                onChange={(e) => changeHandler(e)}
                            />
                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="phone number"
                                name="phone"
                                value={user.phone_number}
                                onChange={(e) => changeHandler(e)}
                            />
                            <input
                                className="form-control mt-3"
                                type="file"
                                placeholder="photo"
                                name="photo"
                                onChange={selectFile}
                            />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <button type="submit" className="btn btn-primary">
                                Edit
                            </button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        </div>
    )
}

export default ModalEditProfile