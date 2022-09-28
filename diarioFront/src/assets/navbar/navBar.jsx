import Modal from 'react-modal';
import {  useState } from 'react';
import Form from '../formModal/formModal';
import './navBar.css';
const customStyles = {
  content: {
    width: '40%',
    height: '40%',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

Modal.setAppElement('#root');
function navbar(create) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <section>
      <nav className="navbar">
        <h1 className="navbarh1">Diario da Loucura</h1>
        <button className="modal-button" onClick={handleModal}>
          {' '}
          create
        </button>
        {/* <ul className="navBarUl">
      <li className="navBarLI">Home</li>
      <li className="navBarLI">Poesias</li>
      <li className="navBarLI">Contos</li>
      <li className="navBarLI">Prosa</li>
    </ul> */}
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        contentLabel="form Create"
        style={customStyles}
      >
        <Form handleModal={handleModal} />
      </Modal>
    </section>
  );
}
export default navbar;
