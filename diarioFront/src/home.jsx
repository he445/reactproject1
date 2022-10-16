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
  const [control, setControl] = useState(false)
  function updatePage() {
    setControl(!control)
    alert("Texto deletado");}
  const getlist = async () => {
    try {
      const res = await axios.get(url + '/characters');
      setlist(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteList = async (listid) => {
    try {
      axios.delete(url + `/characters/delete/${listid}`);
      const newList = list;
      newList.map((list, index) => {
        if (list._id === listid) {
          newList.splice(index, 1);
          setlist = newList;
          
        }
      });
    } catch (error) {console.log(err);}
  };
  useEffect(() => {
    getlist();
  }, [control]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uniqueList, setUniqueList] = useState([]);
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <div className="home">
      <NavBar getAll={getlist} />
      <section className="feature">
        <ul className="featureUL">
          {list.map((list, index) => {
            return (
              <li className="textlist">
                <h2 className="title">{list.title}</h2>
                <p className="pp">
                  <pre>{list.text}</pre>
                </p>

                <button
                  className="textbtn"
                  onClick={() => {
                    setUniqueList(list);
                    handleModal();
                  }}
                >
                  Ler mais
                </button>

                <div className='divBtn'> <button onClick={() => {
                  deleteList(list._id)
                  updatePage()
                  
              ;
              }}>delete</button>
  <button  >update</button></div>
                
              </li>
            );
          })}
        </ul>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleModal}
          contentLabel="form Create"
          style={customStyles}
        >
          <TextModal title={uniqueList.title} text={uniqueList.text}
           />
        </Modal>
      </section>
    </div>
  );
}

export default home;
