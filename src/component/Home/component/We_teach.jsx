import React from "react";

export default function We_teach() {

  return (
    <section className="container we_teach">
      <h2 className="we_header">WHAT WE TEACH</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="text-center card_backg">
            <div className="card-body ">  
              <h3 className="card-title we_title">C Programming</h3>
              <p className="card-text we_des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pellentesque lorem aliquam ac cursus quis et urna. Dui placerat sapien, tellus integer. Laoreet molestie. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pellentesque lorem aliquam ac cursus quis et urna. Dui placerat sapien, tellus integer. Laoreet molestie. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pellentesque lorem aliquam ac cursus quis et urna. Dui placerat sapien, tellus integer. Laoreet molestie. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pellentesque lorem aliquam ac cursus quis et urna. Dui placerat sapien, tellus integer. Laoreet molestie. 
              </p>
            </div>
            {/* <div className="card-footer">
              <div className="text-muted we_read">Read More</div>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="text-center card_backg">
            <div className="card-body ">
              <h3 className="card-title we_title">C++</h3>
              <p className="card-text we_des ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pellentesque lorem aliquam ac cursus quis et urna. Dui placerat sapien, tellus integer. Laoreet molestie.
              </p>
            </div>
            {/* <div className="card-footer">
              <div className="text-muted we_read">Read More</div>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="text-center card_backg">
            <div className="card-body ">
              <h3 className="card-title we_title">Flutter</h3>
              <p className="card-text we_des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pellentesque lorem aliquam ac cursus quis et urna. Dui placerat sapien, tellus integer. Laoreet molestie.
              </p>
            </div>
            {/* <div className="card-footer">
              <div className="text-muted we_read">Read More</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
