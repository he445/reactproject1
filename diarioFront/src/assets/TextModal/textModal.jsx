import './textModal.css';

function text({ title, text }) {
  return (
    <section className="textModal">
      <h2 className="textModalH2">
        {title} {console.log(title)}
      </h2>
      {text.map((text) => {
        return <p className="textModalP">{text}</p>;
      })}
    </section>
  );
}
export default text;
