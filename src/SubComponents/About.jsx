import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
          Welcome to DamaState Properties, where excellence meets opportunity. Founded and led by Thamer AlSaiad, our company is dedicated to transforming your real estate dreams into reality. With a passion for quality, integrity, and personalized service, we specialize in connecting buyers, sellers, and investors across Syria.
          Our Vision: To create a seamless real estate experience that empowers our clients, fosters community growth, and builds lasting relationships.
          </p>
          </div>
          <button>We try hard to offer you best possible Properties!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
