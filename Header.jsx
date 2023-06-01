import React from "react";
import profile from "../../images/profile-image.jpg";
// import Particle from "./Particles";
import "./Header.css";
import headerimg from "../../images/hi3.jpg";
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <div>
      {/* unique div */}
      <React.Fragment>
        <div className="header">
          <div className="particle">
            {/* <Particle /> */}
            <div className="header-img particleComp">
              <img src={headerimg} alt="" />
            </div>
            <h1 className="fullName">
              <Typewriter
                options={{
                  strings: ["Firstname", "Secondname"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="cv">
            <span>
              <b>Cv:</b>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fas fa-file-pdf"></i>
              </a>
            </span>
          </div>
        </div>

        <div className="personalInfo">
          <div className="personalInfo-center">
            <div className="personalInfo-details">
              {/* single info */}
              <div className="info">
                <label htmlFor="name">Fullname</label>
                <h4>Firstname Secondname</h4>
              </div>

              {/* single info */}
              <div className="info">
                <label htmlFor="occupation">occupation</label>
                <h4>Software-Engineer , Web developer</h4>
              </div>

              {/* single info */}
              <div className="info">
                <label htmlFor="email">Email:</label>
                <h4>person@gmail.com</h4>
              </div>
            </div>
            <div className="personalInfo-img">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Header;
