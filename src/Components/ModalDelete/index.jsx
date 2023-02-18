import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDeleteCommentsMutation } from "../../Features/comment/commentApi";
import style from '../../Pages/DetailResep/style.module.css'



const ModalDelete = ({id, idRecipe, children}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteComments] = useDeleteCommentsMutation(id)

  const handleDelete = async () => {
    await deleteComments({id, id_recipe: idRecipe})
  }

  return (
    <Fragment>
      <button
        // className="btn btn-danger text-light mt-1 ms-2"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
        className={`btn btn-danger mt-1 ms-2 position-absolute ${style.delete}`}
      >
        {children}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete Comment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {handleDelete(); handleClose()}}>
            {children}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalDelete;