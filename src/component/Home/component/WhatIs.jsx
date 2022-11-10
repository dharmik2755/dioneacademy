import React from "react";
import Line from "../../../assets/image/Line.svg";
import AcademyTech1 from "../../../assets/image/AcademyTech1.png";
import AcademyTech2 from "../../../assets/image/AcademyTech2.png";
import AcademyTech3 from "../../../assets/image/AcademyTech3.png";

const WhatIsDioneAcademy = () => {
  return (
    <>
      {/* <div className="What_is_dione_academy my-5">
        <div class="c-heroImageGrid">
          <div class="c-container">
            <div class="column"></div>
            <div class="column">
              <div class="row"></div>
              <div class="row">
                <div>
                  <div class="text">
                    <h6>What is Dione Academy?</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem
                    </p>
                    <span className="topic">
                      <h3>Requirement Analysis .</h3>
                      <h3>Thorough study of client’s business.</h3>
                      <h3>Quality & Security audit.</h3>
                      <h3>Delivering last mile support.</h3>
                    </span>
                  </div>
                </div>
                <div></div>
              </div>
              <div class="row"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="moblie">
        <div class="text">
          <h6>What is Dione Academy?</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem
          </p>
          <span className="topic">
            <h3>Requirement Analysis .</h3>
            <h3>Thorough study of client’s business.</h3>
            <h3>Quality & Security audit.</h3>
            <h3>Delivering last mile support.</h3>
          </span>
        </div>
      </div> */}
      <div className="container">
        <div className="container-academy my-5">
        <h2 className="featurette-heading text-uppercase mb-4 hadding">
          What is Dione Academy <span className="what">?</span>
        </h2>
          <div className="row featurette text-white row-academy ">
            <div className="col-md-6 sm-12 lg-6 justify-content-center ">
              <p className="mb-5 text-justify mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                morbi aliquam hendrerit nibh vel amet, enim molestie lectus.
                Eget aliquam varius ut a, nibh malesuada lacus. Eu mauris
                accumsan, mauris laoreet nisl donec. Tortor aliquam dignissim
                varius purus dictum vitae. Tellus sed purus vulputate viverra
                viverra integer commodo, ultricies vehicula. Tincidunt massa
                nunc urna vitae lacus magna enim a.
                varius purus dictum vitae. Tellus sed purus vulputate viverra
                viverra integer commodo, ultricies vehicula. Tincidunt massa
                nunc urna vitae lacus magna enim a.
              </p>
              <ul className="list-group dione-list">
                <li className="list-group-item me-3 ">
                  <span>
                    <img src={Line} alt="" className="me-3" />
                  </span>
                  Requirement analysis.
                </li>
                <li className="list-group-item me-3">
                  <span>
                    <img src={Line} alt="" className="me-3" />
                  </span>
                  Through client's bussiness.
                </li>
                <li className="list-group-item me-3">
                  <span>
                    <img src={Line} alt="" className="me-3" />
                  </span>
                  Quality | Security audit.
                </li>
                <li className="list-group-item me-3">
                  <span>
                    <img src={Line} alt="" className="me-3" />
                  </span>
                  Delivering last mile support.
                </li>
              </ul>
            </div>
            <div className="col-md-6 sm-12 lg-6">
              <div className="container pt-2">
                <div className="row d-flex justify-content-center col-academy">
                  <div className="col lg-6 sm-12 md-12 ">
                    <img src={AcademyTech1} alt="" className="w-100 h-100" />
                  </div>
                  <div className="col lg-6 sm-12 md-12 ">
                    <img src={AcademyTech2} alt="" className="w-100 h-100" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center col-academy">
                  <div className="col lg-12 sm-12 md-12 p-3">
                    <img src={AcademyTech3} alt="" className="w-100 h-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsDioneAcademy;
