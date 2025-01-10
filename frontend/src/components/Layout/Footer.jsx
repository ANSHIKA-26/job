import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Context } from "../../main";


const Footer = () => {
  const { isAuthorized } = useContext(Context);

  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/669bc6ae32dca6db2cb2ab74/1i38807c6';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved</div>
      <div>
        <Link to={""} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={""} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={""} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={""} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
