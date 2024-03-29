import React from "react";
import { FooterBackground, FooterSocial } from "./Styles/StyledComponents";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterBackground>
        <a href="https://www.instagram.com/norgit0/" className="link">
          <FaInstagramSquare className="socialSize" />
        </a>
        <a href="https://www.facebook.com/Norgesantana/" className="link">
          <FaFacebookSquare className="socialSize" />
        </a>
        <a href="https://www.linkedin.com/in/norgesantana/" className="link">
          <FaLinkedin className="socialSize" />
        </a>
        <a href="https://github.com/Norgito" className="link">
          <FaGithubSquare className="socialSize" />
        </a>
      </FooterBackground>
      <FooterSocial>
        <h6>2022 by Norge Santana</h6>
      </FooterSocial>
    </>
  );
};

export default Footer;
