import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const Footer = () => {
  return (
    <React.Fragment>
      <br />
      <div className="main-containerf">
        <h2 className="title contact-title">contact<h2/>
        
          <div className="contact-center">
            {/* links */}
            <div className="contact-center-links">
              <h3>Links</h3>
              <div className="contact-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Education</Link>
                </li>
                <li>
                  <Link to="/">Experience</Link>
                </li>
                <li>
                  <Link to="/">Projects</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li className="admin">
                  <Link to="/">Admin</Link>
                </li>
                <li >
                  <Link to="/">Login</Link>
                </li>
              </div>
            </div>

            {/*media  */}
            <div className="contact-center-media">
              <h3>Media</h3>
              <div className="contact-media">
                <li>
                  <a href="#">
                    <i className="fab fa-youtube-square"></i>Youtube
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>Linkedin
                  </a>
                </li>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Footer;
