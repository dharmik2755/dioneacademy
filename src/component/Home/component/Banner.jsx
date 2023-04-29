import React from "react";
import Slider from "react-slick";
// import Services from "./Services";
import image4 from "./../../../assets/image/Flu1.png";
import image5 from "./../../../assets/image/Flu2.png";
import image6 from "./../../../assets/image/Web1.png";

export default function Banner() {
  
  return (
    <div className="container-fluid bannerContainer p-0">
      <Slider
        className="banner"
        // arrows={true}
        // dots={false}
        infinite={true}
        speed={500}
        autoplay={true}
        slidesToShow={1}
        slidesToScroll={1}
        // fade={true}
      >
        <div>
          <img
            src={image4}
            className="banner_image"
            title="game development"
            alt=""
          />
        </div>
        <div>
          <img
            src={image5}
            className="banner_image"
            title="game development"
            alt=""
          />
        </div>
        <div>
          <img
            src={image6}
            className="banner_image"
            title="game development"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
