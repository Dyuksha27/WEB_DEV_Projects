import React from "react";

function Footer() {
  return (
    <div className="foot">
      <ul className="first">
        <li>
          {" "}
          <h2 className="first">Delhi Police Women Safety Wing </h2>{" "}
        </li>
        <li className="first">
          {" "}
          <img className="first" src="../Images/location (1).png" />{" "}
          <p>Nanakpura, Moti Bagh, New Delhi </p>
        </li>
        <li className="first">
          {" "}
          <img className="first1" src="../Images/telephone (1).png" />{" "}
          <ul className="first-in">
            <li> 181 </li>
            <li> 1091 </li>
            <li> 100 </li>
          </ul>
        </li>
      </ul>
      <ul className="second">
        <li>
          {" "}
          <h2 className="second"> Get Help </h2>{" "}
        </li>
        <li className="second"> Contact Us </li>
        <li>
          {" "}
          <h2 className="second1"> Key Websites </h2>{" "}
        </li>
        <li className="second1">
          {" "}
          <a
            className="second1"
            href="https://delhipolice.gov.in/securityofwomenchild"
          >
            {" "}
            Special Unit for Women & Children{" "}
          </a>
        </li>
        <li className="second1">
          {" "}
          <a className="second1" href="https://delhipolice.gov.in/">
            {" "}
            Delhi Police Website{" "}
          </a>
        </li>
        <li className="second1">
          {" "}
          <a className="second1" href="https://delhi.gov.in/">
            {" "}
            Delhi State Website{" "}
          </a>
        </li>
      </ul>

      <div className="foot-1">
        <ul>
          <li className="foot-11"> Terms of Service </li>
          <li className="foot-11"> Privacy Policy</li>
          <li className="foot-11"> Disclaimer Policy</li>
          <li className="foot-12"> Copyright © 2025. All rights reserved. </li>
        </ul>
      </div>

      <ul>
        <li>
          {" "}
          <h2 className="third"> Follow Us On </h2>{" "}
        </li>
        <li>
          {" "}
          <img className="third" src="../Images/instagram.png" />
        </li>
        <li>
          <img className="third" src="../Images/facebook.png" />{" "}
        </li>
        <li>
          {" "}
          <img className="third" src="../Images/youtube.png" />
        </li>
        <li>
          {" "}
          <img className="third" src="../Images/twitter.png" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
