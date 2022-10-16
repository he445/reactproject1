import './textModal.css';



function text({ title, text }) {
 
  return (
    <section className="textModal">
      <h2 className="textModalH2">
        {title} {console.log(title)}
      </h2>
     <p className="textModalP"> <pre>{text}</pre></p>;
 
  
    </section>
  );
}
export default text;
