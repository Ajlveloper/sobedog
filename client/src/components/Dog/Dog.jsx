import React from "react";
import { Link } from "react-router-dom";
import Huella from "../../assets/img/pawprint.png";
import "./Dog.css";

export default function Dog({
  img,
  name,
  temperament,
  weight_min,
  weight_max,
  id,
}) {
  return (
    <>
      <Link to={`/detailDog/${id}`}>
        <div className="Flex_img_text ">
          <div className="huella_home">
            <img src={Huella} alt="dog footprint" />
          </div>
          <div className="img_text_basis">
            <div className="bg_image_dog"></div>
            <img src={img} alt={name} />
          </div>

          <div className="Home_text">
            <h3 className="h3_home">{name}</h3>
            <div className="Home_text__text-container">
              <div className="FontWeight">Temperaments:</div>
              <div>
                <p> {temperament} </p>
              </div>

              <div className="Flex_p_home">
                <div>
                  <h5 className="FontWeight">Weight min:</h5>
                  <p>{weight_min}kg</p>
                </div>

                <div>
                  <h5 className="FontWeight">Weight max:</h5>
                  <p>{weight_max}kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
