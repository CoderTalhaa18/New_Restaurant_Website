import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../pages/Home.css";

function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="header-container">
          <h1> Talha`s Pizzas </h1>
          <p> We do our pizzas with a big love</p>
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
