import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine, RiInstagramLine } from "react-icons/ri";
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
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
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form
          action="https://formspree.io/f/mgvweagp"
          method="POST"
          >
            <div>
              <input type="name" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" name="message" placeholder="Your Message..."/>
            <button type="submit">Send</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;
