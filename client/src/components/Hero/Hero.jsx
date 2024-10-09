import "./Hero.css";
import heroImage from "../../assets/images/hero-image.png";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div
      className="hero-image"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Step Towards a Greener Tomorrow</h2>
          <p>
            Calculate your carbon footprint and discover how to make a
            difference.
          </p>
          <div className="hero-buttons">
            <Link to="/calculator" className="primary-button">
              Calculate Your Emission
            </Link>
            <Link className="secondary-button">Explore Resources</Link>
          </div>
        </div>
        <div className="side-icons">
          <div className="icon left-icon">
            <span role="img" aria-label="Leaf">
              🌱
            </span>
            <p>Embrace Sustainability</p>
          </div>
          <div className="icon right-icon">
            <span role="img" aria-label="City">
              🏙️
            </span>
            <p>Eco-Friendly Living</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
