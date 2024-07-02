import React from "react";
import { RiFacebookBoxLine, RiGithubLine, RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT US</h1>
        <p>Your can find all of our Contact Info. below!</p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+963 936 948 323</span>
              </div>
              <div>
                <p>Email</p>
                <span>tamer.al-sayyad@hotmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>Syria, Damascus</span>
              </div>
              <ul>
                <Link to={"https://www.facebook.com/tamer.sayyad"} target="_blank"><RiFacebookBoxLine/></Link>
                <Link to={"https://github.com/Thamer-AlSaiad"} target="_blank"><RiGithubLine/></Link>
                <Link to={"https://www.instagram.com/tamer_alsaiad"} target="_blank"><RiInstagramLine/></Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
