import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footcom">
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3 className="gridtex">Ready to explore India</h3>
            <h3 className="gridtex1">Visit Us Today</h3>
          </div>

          <div>
            <Link to="/">
              <button className="gridbtn">Get Started</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 className="foot1">HERICULÉ</h3>
            <p className="foot2">
              Welcome to our website! Explore Indian Culture and Heritage
            </p>
          </div>

          <div className="footer-subscribe">
            <h3 className="foot3">Subscribe To get More updates</h3>
            <form>
              <input className="footin" type="email" placeholder="Email" />
              <button type="submit" className="footbtn">
                <p>Subscribe</p>
              </button>
            </form>
          </div>

          <div className="footer-social">
            <h3 className="foot4">Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3 className="foot5">Call Us</h3>
            <h3 className="foot6">+91 12345238976</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
