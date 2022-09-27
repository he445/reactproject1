import './home.css';
import NavBar from './assets/navbar/navBar';
import Featured from './assets/Featured/Featured';

function home() {
  return (
    <div className="home">
      <NavBar />
      <Featured />
    </div>
  );
}

export default home;
