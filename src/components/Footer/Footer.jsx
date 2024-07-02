import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>DamaState</h4>
          <p>
          Contact us today and let’s embark on this exciting journey together!
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/properties"}>Properties</Link>
            </li>
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+963 936 948 323</p>
          <p>tamer.al-sayyad@hotmail.com</p>
          <p>Copyright © Thamer-AlSaiad <a
            href="https://github.com/Thamer-AlSaiad"
            target="_blank"
            ><img class="fa-github" src="./github-mark.svg" alt=""/>
          </a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
