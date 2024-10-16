import "./LocalResources.css";
import vegetable from "../../assets/images/vegetable.jpg";
import recyclingCenter from "../../assets/images/recycling-center.jpeg";
import bikeSharing from "../../assets/images/bike-sharing.webp";

const LocalResources = () => {
  return (
    <section className="local-resources">
      <h2>Local Resources</h2>

      <p>
        Discover resources and initiatives in your local area that are actively
        addressing climate change.
      </p>

      <div className="resource-cards">
        <div className="resource-card">
          <img src={vegetable} alt="Community Garden" />
          <h3>Community Garden</h3>
          <p>
            Join our community garden to promote local sustainability and enjoy
            fresh, organic produce.
          </p>
          <button className="resource-btn">Learn More</button>
        </div>

        <div className="resource-card">
          <img src={recyclingCenter} alt="Recycling Center" />
          <h3>Recycling Center</h3>
          <p>
            Visit our recycling center for educational programs on waste
            reduction and proper recycling techniques.
          </p>
          <button className="resource-btn">Visit Us</button>
        </div>

        <div className="resource-card">
          <img src={bikeSharing} alt="Bike Sharing" />
          <h3>Bike-Sharing Program</h3>
          <p>
            Join our bike-sharing program to promote sustainable transportation
            and reduce carbon emissions.
          </p>
          <button className="resource-btn">Get Involved</button>
        </div>
      </div>
    </section>
  );
};

export default LocalResources;
