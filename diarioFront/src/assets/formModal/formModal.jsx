import './formModal.css';
import { api } from '../api/api';
import { useState } from 'react';
function form({ getAll, handleModal }) {
  const [newText, setNewText] = useState({ text: [] });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    try {
      await api.creat(newText);
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
        <form className="formM" onSubmit={handleSubmit}>
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
          <label id="lnameT">Texto</label>

          <textarea
            type="text"
            id="lname"
            name="text"
            onChange={(event) => {
              setNewText({ ...newText, text: event.target.value });
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
