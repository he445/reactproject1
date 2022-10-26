import './home.css';
import NavBar from '../src/assets/navbar/navBar';
import Modal from 'react-modal';
import TextModal from '../src/assets/TextModal/textModal';
import { useEffect, useState } from 'react';
import { api } from '../src/assets/api/api';
const customStyles = {
  content: {
    width: '50%',
    height: '70%',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

Modal.setAppElement('#root');

function home() {
  const [list, setlist] = useState([]);
  const [control, setControl] = useState(false);
  const [edtedList, setEdtedList] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uniqueList, setUniqueList] = useState([]);
  function updatePage() {
    setControl(!control);
    alert('sucesso');
  }
  const getlist = async () => {
    try {
      const res = await api.getAll();
      console.log('oi', res);
      setlist(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteList = async (listid) => {
    try {
      await api.delete(listid);
      const newList = list;
      newList.map((list, index) => {
        if (list._id === listid) {
          newList.splice(index, 1);
          setlist(newList);
        }
      });
      updatePage();
    } catch (err) {
      console.log(err);
    }
  };
  const updataList = async (e) => {
    e.preventDefault();
    const updatedList = {
      id: uniqueList._id,
      title: e.target.title.value,
      text: e.target.text.value,
    };
    const newList = list;
    newList.map((item, index) => {
      if (item._id === updatedList.id) {
        newList.splice(index, 1, updatedList);
        setlist(newList);
        handleModal();
      }
    });
    console.log('oiu', updatedList);
    await api.update(updatedList);
  };
  useEffect(() => {
    getlist();
  }, [control]);
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
                  {list.text}
                                  
                </p>
                                                 
                <div className="divBtn">
                   
                  <button
                    className="textbnt1"
                    onClick={() => {
                      setUniqueList(list);
                      handleModal();
                      setEdtedList(false);
                    }}
                  >
                    Ler mais                 
                  </button>
                  
                  <button
                    className="textbnt2"
                    onClick={() => {
                      deleteList(list._id);
                    }}
                  >
                    delete
                  </button>
                  
                  <button
                    className="textbnt3"
                    onClick={() => {
                      setUniqueList(list);
                      handleModal();
                      setEdtedList(true);
                    }}
                  >
                    update
                  </button>
                </div>
                                               
              </li>
            );
          })}
                  
        </ul>
                
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleModal}
          contentLabel="form Create"
          style={customStyles}
        >
          {edtedList ? (
            <form className="formM" onSubmit={updataList}>
                          
              <input
                type="text"
                id="fname"
                name="title"
                defaultValue={uniqueList.title}
              />
                                                    
              <textarea
                type="text"
                id="lname"
                name="text"
                defaultValue={uniqueList.text}
              />
                          
              <button type="submit" className="btn-submit">
                              Submit             
              </button>
                        
            </form>
          ) : (
            <TextModal title={uniqueList.title} text={uniqueList.text} />
          )}
                  
        </Modal>
              
      </section>
          
    </div>
  );
}

export default home;
