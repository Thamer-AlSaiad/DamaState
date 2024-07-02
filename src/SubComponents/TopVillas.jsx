import React from "react";
import { villas } from "../data";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopProperties = () => {
  return (
    <section id="topVillas">
      <h1>TOP PROPERTIES</h1>
      <p>
      Discover a diverse range of homes, apartments, and commercial spaces across Syria. Whether you’re seeking a cozy apartment in Damascus, a luxurious villa in Aleppo, or a prime commercial property in Homs, we’ve got you covered. Our listings feature detailed descriptions, high-quality images, and essential information to help you find your dream property. Explore Syrian Homes today and unlock the possibilities of a new chapter in your life.
      </p>
      <div className="villasContainer">
        {villas.slice(0,3).map((element) => {
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                  <div className="spec">
                    <IoIosPeople />
                    <span>{element.guests}</span>
                    Guests
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    Bedrooms
                  </div>
                  <div className="spec">
                    <BiArea />
                    <span>{element.squareMeter}</span>
                    <h6>M<sup>2</sup></h6>
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span>{element.bathrooms}</span>
                    Bathrooms
                  </div>
                </div>
                <div className="badge">
                <span>{element.price}  </span>
                </div>
              </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopProperties;
