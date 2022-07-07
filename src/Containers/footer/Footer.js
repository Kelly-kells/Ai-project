import React from "react";
import "./footer.css";
import { IoLogoVk } from "react-icons/io";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-btn">
        <p>Request Early access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links__logo">
          <IoLogoVk color="white" fontSize="3rem" />
          <p>Cretchwood 173 waf abigjan</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Overons</h4>
          <p>social media</p>
          <p>counters</p>
          <p>contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and conditions</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>social media</p>
          <p>counters</p>
          <p>contact</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2022 Ai-project.com</p>
      </div>
    </div>
  );
};

export default Footer;
