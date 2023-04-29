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
            THANK YOU so much Happins sir for making me learn Flutter more than my expectation. Compared to all the other institutes, I have been through I got a very good training under Happins. I feel very happy while come to know as he is a very good developer as well.
          </div>
        </div>

        <div className="imageFram">
          <img src={profile} className="user_image" title="Brookes Martin" alt="Brookes Martin" />
          <div className="description">
            <h2>
              <img src={comma} alt="" />
            </h2>
            Very helpful company for coaching of last year project in BCA. acadamy always taking care and very help full to us every time whenever we have query in project they will quick solve the query. I am very thankful for all Happines sir and dioneacademy team reason they help us every movement of our last year project. thanks you very much sir.
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Testimonials;
