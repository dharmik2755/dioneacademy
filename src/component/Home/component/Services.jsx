import React from "react";
import image1 from "./../../../assets/image/web-services.svg";
import image2 from "./../../../assets/image/web-services2.svg";
import image3 from "./../../../assets/image/web-services3.svg";
import image4 from "./../../../assets/image/web-services4.svg";

export default function Services() {
  return (
    <>
    <div className="container mb-5">
      <div className="services d-flex justify-content-evenly">
          
          <div  className="box card bxcd mx-2">
            <img src={image1} alt=""  />
          </div>
        
          <div  className="box card bxcd mx-2">
            <img src={image2} alt="" />
          </div>
       
          <div  className="box card bxcd mx-2">
            <img src={image3} alt="" />
          </div>
       
          <div  className="box card bxcd mx-2">
            <img src={image4} alt="" />
          </div>
       
      </div>
    </div>
    </>
  );
}
