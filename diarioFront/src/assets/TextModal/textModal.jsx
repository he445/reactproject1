import './textModal.css';
import axios, { Axios } from "axios";
import { useEffect,useState } from 'react';
import url from "../api/api";
function text({type, handleModal }) {
const [lists, setLists] = useState([]);
  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(url+"/characters")
        setLists(res.data);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    getLists();
  }, []);

  return (
    <section className="textModal">
      <h2 className="textModalH2">titulo do texto</h2>
      <p className="textModalP">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
        inventore aperiam minus suscipit illo aliquam sed, dolorem fuga aut
        numquam deserunt voluptas enim assumenda veniam eligendi facere debitis?
        Est, harum.
      </p>
    </section>
  );
}
export default text;
