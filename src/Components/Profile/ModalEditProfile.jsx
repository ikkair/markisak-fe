import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import edit from '../../assets/Profile/vector.png'
import { useGetUserDetailQuery } from '../../Features/user/userApi';
import { useUpdateUserByIdMutation } from '../../Features/user/userApi';

const ModalEditProfile = ({ id}) => {
  const { data: user, isLoading, isSuccess } = useGetUserDetailQuery(localStorage.getItem('id_user'));
  const [updateUserById, { isSuccess: isSuccessUpdate }] = useUpdateUserByIdMutation();
  const [dataRow, setDataRow] = useState('my-recipe');
  const [data, setData] = useState({
    name: '',
    phone_number : '',
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

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
        let data = {};
        for (let attr in user) {
          data = { ...data, [attr]: user[attr] };
        }
        return data;
      });
    }
  }, [isSuccess]);

  // const selectFile = (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setSelectedFile(undefined);
  //     return;
  //   }

  //   setSelectedFile(e.target.files[0]);
  // };

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
              {/* <input className="form-control mt-3" type="file" placeholder="photo" name="photo" onChange={selectFile} /> */}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button className="btn btn-primary" onClick={()=> {handleUpdate(); handleClose()}}>
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
