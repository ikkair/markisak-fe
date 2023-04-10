import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from '../../Pages/DetailResep/style.module.css';
import swal from 'sweetalert';
import { useUpdateCommentMutation } from '../../Features/comment/commentApi';


const ModalUpdateComment = ({ children, id, idRecipe }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updateComment] = useUpdateCommentMutation()
  const [message, setMessage] = useState('');

  const updateHandler = async () => {
    await updateComment({message, id_recipe: idRecipe , id  })

    setMessage('')

    console.log(message)
  }

  return (
    <Fragment>
      <button
        className="btn btn-light  mt-1 ms-2"
        style={{ marginRight: '10px' }}
        onClick={handleShow}
      >
        {children}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>Updated?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              updateHandler();
            }}
          >
            {children}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalUpdateComment;
