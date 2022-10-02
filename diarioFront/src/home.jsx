import './home.css';
import NavBar from '../src/assets/navbar/navBar';
import Modal from 'react-modal';
import TextModal from '../src/assets/TextModal/textModal';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import url from '../src/assets/api/api';
const customStyles = {
  content: {
    width: '50%',
    height: '70%',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

Modal.setAppElement('#root');

function home() {
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
  const [uniqueList, setUniqueList] = useState([]);
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <div className="home">
      <NavBar getAll= {getlist}/>
      <section className="feature">
      {list.map((list, index) => {
        return (
          <>
            <ul className="featureUL">
              <li className="textlist">
                <h2 className="title">{list.title}</h2>
                <p>{list.text[0]}</p>
                <p>{list.text[1] + ' (...)'}</p>
                <button
                  className="textbtn"
                  onClick={() => {
                    setUniqueList(list);
                    handleModal();
                  }}
                >
                  Ler mais
                </button>
              </li>
            </ul>
          </>
        );
      })}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        contentLabel="form Create"
        style={customStyles}
      >
        <TextModal title={uniqueList.title} text={uniqueList.text} />
      </Modal>
    </section>
    </div>
  );
}

export default home;
