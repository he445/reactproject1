import Modal from 'react-modal';
import TextModal from '../TextModal/textModal';
import { useState } from 'react';
import './Featured.css';
const customStyles = {
  content: {
    width: '50%',
    height: '90%',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

Modal.setAppElement('#root');
function featured() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <section className="feature">
      <h1>Textos </h1>
      <ul className="featureUL">
        <li className="textlist">
          <h2 className="title">Titulo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo animi
            unde, tempora magni ea laboriosam numquam, labore explicabo possimus
            vel iste quam non placeat pariatur doloremque totam dignissimos, rem
            sequi?
          </p>
          <button className="modal-button" onClick={handleModal}>
            Ler mais
          </button>
        </li>
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        contentLabel="form Create"
        style={customStyles}
      >
        <TextModal handleModal={handleModal} />
      </Modal>
    </section>
  );
}
export default featured;
