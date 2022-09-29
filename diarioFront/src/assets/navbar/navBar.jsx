import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import url from '../api/api';
import axios, { Axios } from 'axios';
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
function navbar() {
  const [list, setlist] = useState([]);
  const getlist = async () => {
    try {
      const res = await axios.get(url + '/characters');
      setlist(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getlist();
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <section className="navbarFather">
      <nav className="navbar">
        <h1 className="navbarh1">Diario da Loucura</h1>
        <button className="modal-button" onClick={handleModal}>
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
        <Form getAll={getlist} handleModal={handleModal} />
      </Modal>
    </section>
  );
}
export default navbar;
