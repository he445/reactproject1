import Modal from 'react-modal';
import TextModal from '../TextModal/textModal';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import url from '../api/api';
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
 const [list, setlist] = useState([])
 useEffect(() => {
    const getlist = async () => {
      try {
        const res = await axios.get(url + '/characters');
        setlist(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getlist();
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <section className="feature">
      <h1>Textos </h1>
    {list.map((list) => { return (<> 
    
      <ul className="featureUL">
        <li className="textlist">
          <h2 className="title">{list.title
}</h2>
          <p>
            {list.text}
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
      </Modal></>)})} 
      
    </section>
)}
export default featured;
