import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Welcome to DamaState!</h3>
          <p>Welcome to DamaState, where dreams find their address. Our passion for exceptional properties, personalized service, and market expertise drives us to redefine the real estate experience in Syria.</p>
          <h3>Our Story</h3>
          <p>Founded by Thamer AlSaiad, DamaState emerged from a vision to create more than just transactions; we wanted to build lasting relationships. With years of experience in the industry, Thamer recognized the need for a trusted partner who truly understands the nuances of the Syrian property market.</p>
          <h3>Our Service</h3>
          <p>At DamaState, you’re not just a client; you’re family. We listen, we understand, and we tailor our services to your specific needs.</p>
        
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
