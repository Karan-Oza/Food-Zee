import React from 'react';
import './About.css';
import { assets } from '../../assets/frontend_assets/assets'; // Import your assets here

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero"> 
        <img src={assets.header_img} alt="About Us" className="about-hero-img" />
        <div className="about-hero-text">
          <h1>Welcome to Tomato</h1>
          <p>Your favorite food delivery service!</p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2019, Tomato has grown from a small startup into one of the
            most trusted food delivery services in the country. Our mission is to deliver
            fresh, delicious food to your door with the tap of a button.
          </p>
          <br />
          <p>
            In a world where convenience is key, we’re committed to providing a service that delivers not just food,
            but happiness to your doorstep. Today, Tomato serves thousands of customers daily, partnering with hundreds 
            of restaurants to bring a wide variety of cuisines to your home.
          </p>
        </section>
        <br />
        
        <section className="about-vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is simple: to be the go-to platform for food delivery and bring people closer to the food they love. 
            We envision a future where Tomato is synonymous with fresh, fast, and reliable food delivery across the globe.
          </p>
          <p>
            At Tomato, we aim to redefine how you experience food—from discovering exciting new flavors to providing a seamless 
            delivery service that makes every meal special.
          </p>
        </section>
        <br />
        
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to connect people with the best restaurants in their area and offer a wide range of options that 
            cater to every taste and preference. Whether you’re craving a quick snack, a gourmet meal, or a healthy option, 
            we’ve got you covered.
          </p>
          <p>
            We are committed to promoting local businesses and building strong partnerships with restaurants. Our mission 
            goes beyond delivering food—we aim to enrich our communities by providing opportunities for restaurants to 
            thrive in the digital age.
          </p>
        </section>
        <br />

        <section className="about-achievements">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <img src={assets.medal} alt="Achievement" />
              <h3>1M+ Orders Delivered</h3>
              <p>We’ve successfully delivered over 1 million orders and counting!</p>
            </div>
            <div className="achievement-item">
              <img src={assets.handshake} alt="Achievement" />
              <h3>500+ Restaurant Partners</h3>
              <p>Partnering with over 500 restaurants to offer diverse cuisines.</p>
            </div>
            <div className="achievement-item">
              <img src={assets.badge} alt="Achievement" />
              <h3>Top Rated App</h3>
              <p>Our app is one of the highest-rated in food delivery, thanks to you!</p>
            </div>
          </div>
        </section>
        
        <section className="about-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <img src={assets.food} alt="Quality Food" />
              <h3>Quality Food</h3>
              <p>We partner with the best restaurants to deliver fresh and tasty meals.</p>
            </div>
            <div className="value-item">
              <img src={assets.timing} alt="Fast Delivery" />
              <h3>Fast Delivery</h3>
              <p>We ensure your food arrives quickly and fresh every time.</p>
            </div>
            <div className="value-item">
              <img src={assets.satisfaction} alt="Customer Satisfaction" />
              <h3>Customer Satisfaction</h3>
              <p>We are committed to providing the best possible service to our customers.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={assets.karan} alt="Team Member 1" />
              <h3>Karan Oza</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src={assets.sancita} alt="Team Member 2" />
              <h3>Sanchita Sahu</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
              <img src={assets.founder} alt="Team Member 3" />
              <h3>Krishna Oza</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <h2>Get In Touch</h2>
          <p>If you have any questions, feel free to reach out to us:</p>
          
          <li>
      Phone: 
      <a href="tel:+8104295527" className="phone-link">
        +8104295527
      </a>
    </li>
            <li>
              Email: 
              <a href="mailto:ozakaran1@gmail.com" className="email-link">
                ozakaran1@gmail.com
              </a>
            </li>
          {/* Add Google Maps Embed */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27990157657!2d-74.25986568799865!3d40.69767006351124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2efb57e9bb%3A0x7c94966d4d45556c!2sNew%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1633332920843!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map Location"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
