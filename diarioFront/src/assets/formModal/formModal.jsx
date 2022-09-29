import './formModal.css';
import axios, { Axios } from 'axios';
import url from '../api/api';
import { useState } from 'react';
function form({ getAll, handleModal }) {
  const [newText, setNewText] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    try {
      await axios.post(url + '/characters/create', newText);
      await getAll();
      console.log('ok');
    } catch (error) {}

    setLoading(false);
    handleModal();
  }

  return (
    <>
      {loading ? (
        <div> loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label id="fname">Titulo:</label>
          <input
            type="text"
            id="fname"
            name="title"
            onChange={(event) => {
              setNewText({ ...newText, title: event.target.value });
              console.log('aoba', newText);
            }}
          />
          <label id="lname">Texto</label>
          <span>separe as linhas ulizando o "/"</span>
          <input
            type="text"
            id="lname"
            name="text"
            onChange={(event) => {
              setNewText({ ...newText, text: event.target.value.split('/') });
              console.log('aoba', newText);
            }}
          />
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
}
export default form;
