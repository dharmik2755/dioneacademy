import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "./../assets/image/footer_logo2.svg";
import footer_image from "./../assets/image/footer_line.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { SiSkypeforbusiness } from "react-icons/si";

export default function Footer() {
  
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`} className="text-white text-decoration-none">{children}</a>;
  };

  const Mailto = ({ email}) => {
    return <a href={`mailto:${email}`} className="text-white text-decoration-none">{email}</a>;
  };

  const Skype = ({ skype}) => {
    return <a href={`skype:${skype}`} className="text-white text-decoration-none">{skype}</a>;
  };

  const handleClickinsta = () => {
    window.open("https://www.instagram.com/dione_hub/?hl=en");
  };
  
  const handleClickfacebook = () => {
    window.open("https://www.facebook.com/DioneApps-106632712060664/?ref=pages_you_manage");
  };
  
  const handleClicktwitter = () => {
    window.open("http://dioneapps.com/upload/547501Twitter.svg");
  };
  
  const handleClicklinkedin = () => {
    window.open("https://www.linkedin.com/company/74704565/admin/");
  };

  
  // const [first, setfirst] = useState(second)

  return (
    <footer className="text-white text-center text-lg-start bg-Dark">
      <div className="container-fluid p-0 m-0 footer">
        <div className="container">
          <iframe title="Dioneacademy"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1859.4390956678922!2d72.8907984!3d21.2366783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5a559031e1%3A0xf206ac84956bbcff!2sSunrise%20Commercial%20Complex!5e0!3m2!1sen!2sin!4v1667796804336!5m2!1sen!2sin"/>
        </div>

        <img src={footer_image} className="footer_image" alt="dione academy" />
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <div className="text-uppercase mb-4 px-1">
                <img src={footerlogo} alt="" className="w-75" />
              </div>
              <p className="me-4">
                We are known for our proficient and client-centric Mobile
                application development services, Web and Backend Development
                services, UI/UX Designing services and Logo Designing services.
              </p>
              <div className="mt-4 social-icons">
                <Link type="button" className="btn btn-lg">
                  <FaInstagram onClick={handleClickinsta} />
                </Link>
                <Link type="button" className="btn btn-lg">
                  <FaFacebookF onClick={handleClickfacebook} />
                </Link>
                <Link type="button" className="btn btn-lg">
                  <BsTwitter onClick={handleClicktwitter} />
                </Link>
                <Link type="button" className="btn btn-lg">
                  <FaLinkedinIn onClick={handleClicklinkedin} />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 pt-1 mb-4 mb-md-0">
              <h5 className="mb-4 pb-1 text-uppercase footer_title">
                Contacts
              </h5>
              <div className="form-outline form-white mb-4">
                <p className="me-4">
                  202- Sunrise Commercial Complex, Lajamani Chowk, Mota Varachha, Surat.
                </p>
              </div>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <span className="fa-li me-1">
                    <FiPhoneCall />
                  </span>
                  <Callto phone="+91 8128289918" > +91 8128289918</Callto>
                </li>
                <li className="mb-3">
                  <span className="fa-li me-2">
                    <FaRegEnvelope />
                  </span>
                   <Mailto email="info@dioneapps.com" >info@dioneapps.com</Mailto>
                  {/* <span className="ms-1">info@dioneapps.com</span> */}
                </li>
                <li className="mb-3">
                  <span className="fa-li me-2">
                    <SiSkypeforbusiness />
                  </span>
                  <Skype skype="mailto:support@host.com" >support.dioneapps</Skype>
                  {/* <span className="ms-1">support.dioneapps</span> */}
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 pt-1 mb-4 mb-md-0 courses">
              <h5 className="mb-4 text-uppercase footer_title">Our courses</h5>
              <table className="table table-borderless text-truncate  text-white">
                <tbody className="">
                  <tr className="list-unstyled">
                    <td className="mb-1 courses_des">
                      <Link className="text-decoration-none text-white">
                        <span>C Programming</span>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="mb-1 courses_des">
                      <Link className="text-decoration-none text-white">
                        <span>C++</span>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="mb-1 courses_des">
                      <Link className="text-decoration-none text-white">
                        <span>Flutter</span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center p-3 bg-black">
          © 2022 Copyright :
          <Link className="text-white ps-2 text-decoration-none" to="/">
            dioneacademy.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
