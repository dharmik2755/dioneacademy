import React from // , { useState }
"react";
import headerLogo from "../assets/image/academyLogo.png";
import j2l_logo from "../assets/image/j2l_logo.png";
import menuLogo from "../assets/image/favicon1.svg";
// import menu from "../assets/image/menu.png";
import {
  //NavLink ,
  Link,
} from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  // const [toggelBtn, setToggelBtn] = useState(false);

  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`} className="text-white text-decoration-none">{children}</a>;
  };

  return (
    <>
      <div className="container-fluide header_info_bg">
        <div className="container">
          <div className="row justify-content-between align-items-center ">
            <div className="col-lg-5 col-md-12 col-sm-12 d-md-block justify-content-center">
              <div className="text-center p-1 herder_info_text">
                  academy@dioneapps.com <span className="px-2">|</span> 
                {/* <Link className="text-white text-decoration-none" to={`tel:+91 81282 89918`}>+91 81282 89918 </Link> */}
                <Callto phone="+91 72111 40033"> +91 72111 40033</Callto>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 d-md-block justify-content-center">
              <div className="text-center p-1 header_info">
                <div className="social-icons header_icon">
                  <Link type="button" className="btn btn-lg her_icon">
                    <FaInstagram className="h_icon" />
                  </Link>
                  <Link type="button" className="btn btn-lg her_icon">
                    <FaFacebookF className="h_icon" />
                  </Link>
                  <Link type="button" className="btn btn-lg her_icon">
                    <BsTwitter className="h_icon" />
                  </Link>
                  <Link type="button" className="btn btn-lg her_icon">
                    <FaLinkedinIn className="h_icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="site-header sticky-top position-sticky top-0 z-index-1 header-bg  ">
        {/* <div className="top-header light_skin bg-theme-blue">
        <div className="container">
          <div className="row align-items-justify">
            <div className="col-lg-4 col-md-3 col-sm-6 d-none d-md-block">
              <ul className="contact_detail list_none list-unstyled text-center text-md-left">
                <li className="p-0 ">
                  <Link to="mailto:info@cdmi.in" title="click here for send us email">
                    <i className="ti-email"></i>
                    info@cdmi.in
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-12 text-center">
              <ul className="list_none que_cont text-center list-unstyled">
                <li className="text-center">
                  <Link to="tel:+919033316003" title="Have any Question? Contact Now"
                    className="text-white">
                    +91 90333 16003
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="d-flex flex-wrap align-items-center justify-content-md-end justify-content-center mt-md-0">
                <ul className="list_none social_icons social_white list-unstyled text-center text-md-right">
                  <li>
                    <Link 
                    href="https://www.facebook.com/CreativeMultimediaInstituteSurat"
                      rel="nofollow" title="Follow us on Facebook" target="_blank">
                      <i className="ion-social-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/cdmi_multimedia" target="_blank"
                      rel="nofollow" title="Follow us on Twitter" >
                      <i className="ion-social-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://g.page/creativemultimediasurat?share"
                      target="_blank"
                      rel="nofollow"
                      title="Find us on Map"
                    >
                      <i className="ion-social-googleplus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/school/creative-multimedia-institute/"
                      target="_blank"
                      rel="nofollow"
                      title="Follow us on Linkedin"
                    >
                      <i className="ion-social-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/creative_multimedia_institute/"
                      target="_blank"
                      rel="nofollow"
                      title="Follow us on Instagram"
                    >
                      <i className="ion-social-instagram-outline"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/c/CreativeDesignMultimediaInstitute"
                      target="_blank"
                      rel="nofollow"
                      title="Subscribe us on Youtube"
                    >
                      <i className="ion-social-youtube-outline"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://api.whatsapp.com/send?phone=919033316003"
                      target="_blank"
                      rel="nofollow"
                      title="Chat on Whatsapp"
                    >
                      <i className="ion-social-whatsapp-outline"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav h-50 flex-nowrap">
            <div className="container-fluid justify-content-center">
              <Link
                className="navbar-logo d-flex w-50 justify-content-center align-items-center headersimage" to="/" >
                <img src={headerLogo} alt="Dioneacademy Logo"
                  className="w-50 h-25 me-2 headerLogo" title="Dioneacademy Logo"/>
                <div className="line"></div>
                <img src={j2l_logo} alt="Jump to learn logo" className="j2l_logo p-1"
                />
                <img src={menuLogo} alt="Dioneacademy Logo" className=" h-25 me-3 menuLogo" title="Dioneacademy Logo" />
                <div className="line2"></div>
                <img src={j2l_logo} alt="Jump to learn logo"
                  className="w-50 h-25 ms-1 p-3 h-25 j2l_2"/>
              </Link>
              {/* mobile menu button */}
              {/* <button className="navbar-toggler text-bg-black menu_nav" type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation ">
              <div className={toggelBtn ? "change" : ""} onClick={() => {
                  setToggelBtn(toggelBtn ? false : true); }}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </button> */}
              {/* web menu view */}
              {/* <div
              className="collapse navbar-list navbar-collapse w-50"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item mx-auto">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active fs-5 text-white mx-3"
                        : "nav-link fs-5 text-white mx-3"
                    }
                    to="/"
                    end
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item mx-auto">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active fs-5 text-white mx-3"
                        : "nav-link fs-5 text-white mx-3"
                    }
                    to="/carrer"
                  >
                    Career
                  </NavLink>
                </li>
                <li className="nav-item mx-auto Inquire">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link  fs-5 text-white mx-3"
                        : "nav-link fs-5 text-white mx-3"
                    }
                    to="#Inquire"
                  >
                    Inquire Us
                  </NavLink>
                </li>

                <li className="nav-itemn mx-auto mx-2">
                  <button
                    type="button"
                    className="btn nav-button fs-5 text-white  px-3 mx-auto d-block Inquire_button"
                  >
                    Inquire Us
                  </button>
                </li>
              </ul>
            </div> */}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
