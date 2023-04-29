import React from "react";

export default function Mission() {
  return (
    <div className="container-fluide mission_fluide">
      <div className="container py-4">
        <div className="row my-3 mission">
          <div className="col-sm-6 py-3">
            <div className="card border-0  bg_mission">
              <h3 className="card-title text-uppercase mission_title">
                Our Mission
              </h3>
              <p className="card-text my-3 mission_des">
              We stimulate our students’ love for learning, encourage them to try new and exciting things, and give them a solid foundation to build.
              </p>
            </div>
          </div>
          <div className="col-sm-6 pt-3">
            <div className="card border-0  bg_mission">
              <h3 className="card-title text-uppercase mission_title">
                Our Vision
              </h3>
              <p className="card-text my-3 mission_des">
              Our vision is to develop well-rounded, confident, and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
