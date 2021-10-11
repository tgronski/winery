import React from "react";
import polaroid from "./yarn.jpg";
import LazyLoad from "react-lazyload";
import "./Footer.css";

function Footer() {
  return (
    <div id="Footer">
      <LazyLoad height={310}>
        <img id="Polaroid" src={polaroid} alt="Polaroid" />
      </LazyLoad>
      <div id="Footer-menu" className="Menu-horizontal">
        <ul>
          <li>Vist us</li>
          <li>Gallery</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
