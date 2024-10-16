import { Link } from "react-router-dom";
import "./GlobalChallenges.css";

const GlobalChallenges = () => {
  return (
    <section className="global-challenges">
      <h2>Global Challenges</h2>
      <p>
        Participate in carbon reduction challenges, track your progress, and
        discover eco-friendly brands making a difference.
      </p>
      <div className="challenge-cards">
        <div className="challenge-card">
          <h3>Local Community</h3>
          <p>
            Join the challenge to reduce your carbon footprint and compete
            locally for a sustainable future.
          </p>
          <Link className="challenge-btn">Join Now</Link>
        </div>
        <div className="challenge-card">
          <h3>Global Communities</h3>
          <p>
            Explore and support brands that are committed to eco-friendly
            practices and products.
          </p>
          <Link to="/globaldashboard" className="challenge-btn">
            Discover
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlobalChallenges;
