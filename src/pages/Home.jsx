import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to OrganicVege</h2>
          <p>Get fresh and organic vegetables delivered to your doorstep.</p>
          <a href="#products" className="cta-button">
            Shop Now
          </a>
        </div>
      </section>
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <img
              src="https://cdn.shopify.com/s/files/1/0645/9519/8199/collections/Fresh-Produce-1_1024x1024.jpg?v=1658572360"
              alt="Feature 1"
              className="feature-image"
            />
            <h3>Fresh Organic Vegetables</h3>
            <p>Experience the freshness of hand-picked organic vegetables.</p>
          </div>
          <div className="feature">
            <img
              src="https://cdn.shopify.com/s/files/1/0104/1059/0266/products/vegetables-box.jpg?v=1541021440"
              alt="Feature 2"
              className="feature-image"
            />
            <h3>Healthy and Nutritious</h3>
            <p>Enjoy the health benefits of chemical-free, nutrient-rich vegetables.</p>
          </div>
          <div className="feature">
            <img
              src="https://cdn.shopify.com/s/files/1/0645/9519/8199/collections/Fresh-Produce-1_1024x1024.jpg?v=1658572360"
              alt="Feature 3"
              className="feature-image"
            />
            <h3>Environmentally Friendly</h3>
            <p>Support sustainable farming practices and protect the environment.</p>
          </div>
        </div>
      </section>
      <section id="benefits" className="benefits">
        <h2>Benefits</h2>
        <div className="benefit-list">
          <div className="benefit">
            <img
              src="https://cdn.shopify.com/s/files/1/0645/9519/8199/collections/Fresh-Produce-1_1024x1024.jpg?v=1658572360"
              alt="Benefit 1"
              className="benefit-image"
            />
            <h3>Improved Health</h3>
            <p>Organic vegetables provide essential nutrients for a healthy body and immune system.</p>
          </div>
          <div className="benefit">
            <img
              src="https://cdn.shopify.com/s/files/1/0645/9519/8199/collections/Fresh-Produce-1_1024x1024.jpg?v=1658572360"
              alt="Benefit 2"
              className="benefit-image"
            />
            <h3>Taste and Flavor</h3>
            <p>Experience the natural and delicious flavors of organically grown vegetables.</p>
          </div>
          <div className="benefit">
            <img
              src="https://cdn.shopify.com/s/files/1/0645/9519/8199/collections/Fresh-Produce-1_1024x1024.jpg?v=1658572360"
              alt="Benefit 3"
              className="benefit-image"
            />
            <h3>Peace of Mind</h3>
            <p>Know that you are consuming vegetables free from harmful chemicals and pesticides.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home
