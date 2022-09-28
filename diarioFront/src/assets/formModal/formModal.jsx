import './formModal.css';
import axios, { Axios } from "axios";
import { useState } from 'react';
function form({ handleModal }) {
  const [createdText, setCreatedText]=  useState([]);
 
  const creatText = async () => {
   const res = await axios.get(createdText)
      
   console.log(res)
  }
  creatText()
   

  
  return (
    <form>
      <label for="fname">Titulo:</label>
      <input type="text" id="fname" name="fname" />
      <label for="lname">Texto</label>
      <input type="text" id="lname" name="lname" />
    </form>
  );
}
export default form;
