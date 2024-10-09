import Hero from "../../components/Hero/Hero";
import daily_carbon_footprint from "../../assets/images/daily_carbon_footprint.png";
import sustainable_practices from "../../assets/images/sustainable-practices.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />

      <div>
        {/* Section 1: Text on Left, Image on Right */}
        <section className="flex-section">
          <div className="text-content">
            <h2 className="section-title">Calculate Your Carbon Footprint</h2>
            <p className="section-text">
              Discover how your daily activities contribute to your carbon
              emissions. Our easy-to-use tools help you analyze your lifestyle
              choices and find ways to reduce your impact on the environment.
              We'll ask about your transportation, home energy, food, waste, and
              shopping habits to estimate your carbon footprint. By making small
              changes, you can significantly reduce your impact and contribute
              to a more sustainable future. Start making a difference today!
            </p>
          </div>
          <div className="image-content">
            <img
              src={daily_carbon_footprint}
              alt="Carbon Footprint Calculation"
              className="section-image"
            />
          </div>
        </section>

        {/* Section 2: Text on Right, Image on Left */}
        <section className="flex-section">
          <div className="image-content">
            <img
              src={sustainable_practices}
              alt="Sustainable Practices"
              className="section-image"
            />
          </div>
          <div className="text-content">
            <h2 className="section-title">Embrace Sustainable Practices</h2>
            <p className="section-text">
              Learn about sustainable practices that can help reduce your carbon
              footprint. From energy-saving tips to waste reduction strategies,
              we provide resources to make a positive impact. Discover how to
              make a difference with our expert advice on eco-friendly living.
              Start your journey to a more sustainable future today! By
              embracing sustainable practices, you can reduce your impact on the
              environment and create a better world for generations to come.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2 className="section-title">
            Benefits of Reducing Your Carbon Footprint
          </h2>
          <div className="benefit-cards">
            <div className="card">
              <h3>Healthier Planet</h3>
              <p>
                Less pollution means cleaner air and water for future
                generations.
              </p>
            </div>
            <div className="card">
              <h3>Cost Savings</h3>
              <p>
                Save money through energy efficiency and reduced consumption.
              </p>
            </div>
            <div className="card">
              <h3>Community Impact</h3>
              <p>
                Join a movement that inspires others to adopt sustainable
                practices.
              </p>
            </div>
          </div>

          {/* Resources Section */}
          <section className="resources-section">
            <h2 className="section-title">Explore More Resources</h2>
            <div className="resources-list">
              <a href="#" className="resource-item">
                Blog Articles
              </a>
              <a href="#" className="resource-item">
                Guides & E-books
              </a>
              <a href="#" className="resource-item">
                Webinars
              </a>
            </div>
          </section>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2 className="cta-title">Start Your Journey Today!</h2>
          <p className="cta-description">
            Join us in making the planet a better place.
          </p>
          <button className="cta-button">Get Started</button>
        </section>
      </div>
    </div>
  );
};

export default Home;
