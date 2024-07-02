import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../data";
const SingleProperty = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];
  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>{filteredVilla.name}</h3>
          <div className="images">
            <div className="villaImg">
              <img src={filteredVilla.image} alt={filteredVilla.name} />
            </div>
          </div>
          <h4>{filteredVilla.location}</h4>
          <p>
            {filteredVilla.bathrooms} Bedrooms <br/> {filteredVilla.guests} Guests  <br/> {" "}
            {filteredVilla.bathrooms} Bathrooms  <br/>  {filteredVilla.squareMeter}{" "}
            Area
          </p>
          <div className="location">
            <h4>LOCATION</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106693.49645618351!2d36.16456447429199!3d33.3143247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1519187a6ec47073%3A0xbecc8f0470798ea!2sSyrian%20Private%20University!5e0!3m2!1sen!2s!4v1719940497039!5m2!1sen!2s"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProperty;
