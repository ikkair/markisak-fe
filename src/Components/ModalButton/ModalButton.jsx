import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardDetailVideo from '../Cards/CardDetailVideo/CardDetailVideo';
import { useState } from 'react';
import style from './style.module.css'

function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Step Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardDetailVideo url={'https://www.youtube.com/watch?v=9m7YHjBeduA'} title={'MUKBANG 7 BUNGKUS NASI PADANG PORSI JUMB0!!'} time={'3 Months ago'} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const ButtonVideos = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className={`${style.Buttons} my-2 `} variant="warning" onClick={() => setModalShow(true)}>
         <i className="fa-solid fa-play"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ButtonVideos