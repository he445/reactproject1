import Modal from "react-modal";
import { useState } from "react";
import Form from "../formModal/formModal";
import "./navBar.css"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "40rem",
    height: "50rem",
    transform: "translate(-50%, -50%)",
    backgroundColor: " rgba(0, 0, 0, 0.8)",
    borderRadius: "15px",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");
function navbar(create)
{
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return(
    <section><nav className='navbar'>
    <h1 className="navbarh1">Diario da Loucura</h1>
    <button className="modal-button" onClick={handleModal}> create</button>
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
        style={customStyles}
        contentLabel="form Create"
      >
        <Form create={create}  handleModal={handleModal} />
      </Modal>
    </section>
)}
export default navbar