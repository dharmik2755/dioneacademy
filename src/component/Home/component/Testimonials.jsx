import React from "react";
import Slider from "react-slick";
import image1 from "./../../../assets/image/Rectangle8.png";
import comma from "./../../../assets/image/comma.png";
import profile from "./../../../assets/image/profile.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials container">
      <h2 className="heading">Testimonials</h2>
      <Slider
        className="testimonial"
        arrows={false}
        dots={false}
        infinite={true}
        speed={500}
        autoplay={true}
        slidesToShow={1}
        slidesToScroll={1}
        fade={true} 
        >
        <div className="imageFram">
          <img src={image1} className="user_image" title="Brookes Martin" alt="Brookes Martin" />
          <div className="end description">
            <h2>
              <img src={comma} alt="" />
            </h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            quibusdam inventore quod ratione error similique animi aperiam.
            Doloremque, itaque praesentium. Iure id architecto labore, possimus
            eaque error nisi facilis omnis?
          </div>
        </div>

        <div className="imageFram">
          <img src={profile} className="user_image" title="Brookes Martin" alt="Brookes Martin" />
          <div className="description">
            <h2>
              <img src={comma} alt="" />
            </h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            quibusdam inventore quod ratione error similique animi aperiam.
            Doloremque, itaque praesentium. Iure id architecto labore, possimus
            eaque error nisi facilis omnis?
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Testimonials;
