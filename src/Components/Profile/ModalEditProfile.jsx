import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import edit from '../../assets/Profile/vector.png';
import { useGetUserDetailQuery } from '../../Features/user/userApi';
import { useUpdateUserByIdMutation } from '../../Features/user/userApi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ModalEditProfile = ({ id }) => {
  const MySwal = withReactContent(Swal);
  const { data: user, isLoading, isSuccess } = useGetUserDetailQuery(localStorage.getItem('id_user'));
  const [updateUserById, { isSuccess: isSuccessUpdate, isLoading: isLoadingUpdate }] = useUpdateUserByIdMutation();
  const [dataRow, setDataRow] = useState('my-recipe');
  const [data, setData] = useState({
    name: '',
    phone_number: '',
    photo: user?.photo,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  function showLoading() {
    Swal.fire({
      title: 'Loading...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  const handleUpdate = async () => {
    const formData = new FormData();
    for (let attr in data) {
      formData.append(attr, data[attr]);
    }

    await updateUserById({ id, data: formData });
  };

  useEffect(() => {
    if (isSuccess) {
      setData((prev) => {
        let item = {};
        for (let attr in data) {
          item = { ...item, [attr]: user[attr] };
        }
        return item;
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isLoadingUpdate) {
      showLoading();
    }

    if (isSuccessUpdate) {
      Swal.close();
      MySwal.fire({
        title: <p>Profile Updated!</p>,
        icon: 'success',
      });
    }
  }, [isSuccessUpdate, isLoadingUpdate]);

  const selectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        photo: e.target.files[0],
      };
    });
  };

  return (
    <div>
      <>
        <button className="btn mt-5" onClick={handleShow}>
          <img className="" src={edit} alt="" />
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>

          {/* <form onSubmit={changeHandler}> */}
          <Modal.Body>
            <input className="form-control mt-3" type="text" placeholder="name" name="name" value={data.name} onChange={(e) => changeHandler(e)} />
            <input className="form-control mt-3" type="text" placeholder="phone number" name="phone_number" value={data.phone_number} onChange={(e) => changeHandler(e)} />
            <input className="form-control mt-3" type="file" placeholder="photo" name="photo" onChange={selectFile} id={`photo`} />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleUpdate();
                handleClose();
              }}
            >
              Edit
            </button>
          </Modal.Footer>
          {/* </form> */}
        </Modal>
      </>
    </div>
  );
};

export default ModalEditProfile;
