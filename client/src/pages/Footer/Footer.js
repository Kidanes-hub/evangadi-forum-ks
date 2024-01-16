import React from "react";
import Logo from "../../assets/img/footerlogo.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-warpper">
        <div className="footer-top">
          <div className="container">
            <div className="footer-bottom-content clearfix">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="logo-footer">
                    <Link className="navbar-brand" to="#">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>

                  <ul className="footer-social-list list-social list-inline">
                    <li>
                      <Link to="https://www.facebook.com/EthiopiansNetwork">
                        <i className="social_facebook ">
                          <AiFillFacebook />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/evangaditech/">
                        <i className="social_instagram ">
                          <TiSocialInstagram />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/c/weareethiopians">
                        <i className="social_youtube ">
                          <AiFillYoutube />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/c/weareethiopians">
                        <i className="social_twitter ">
                          <li>
                            <Link to="https://www.youtube.com/c/weareethiopians">
                              <i className="social_youtube ">
                                <AiFillTwitterCircle />
                              </i>
                            </Link>
                          </li>
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-4">
                  <h5>Useful Links</h5>
                  <ul className="list-menu">
                    <li>
                      <Link className="a" to="#">
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link className="a" to="#">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link className="a" to="#">
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-4">
                  <h5>Contact Info</h5>
                  <ul className="list-menu contact-list">
                    <li className="b">Evangadi Networks </li>
                    <li className="b">evangadiforum@email.com</li>
                    <li className="b">+1-222-333-4444</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
