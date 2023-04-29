import React from "react";

export default function We_teach() {

  return (
    <section className="container we_teach">
      <h2 className="we_header">WHAT WE TEACH</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="text-center card_backg">
            <div className="card-body ">  
              <h3 className="card-title we_title">C & C++</h3>
              <p className="card-text we_des">
              Most of the theories related to computers like Computer Networks, Compiler Designing, Computer Architecture, and Operating Systems are based on C programming language and require a good knowledge of C programming if the student would like to be part of the IT industry. 
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
              <h3 className="card-title we_title">Development</h3>
              <p className="card-text we_des ">
              Web development is designing and coding a functional layout for your site and mobile, making sure it's compatible with all browsers, mobile devices, and other devices that might access the site. A well-designed website and mobile app will provide your business with sales growth and improve sales.
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
              Flutter is the future of mobile development and going to really take off in 2022. Flutter promises to solve the problem without compromising the natural look and feel, which is what most of the app developers want.
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
