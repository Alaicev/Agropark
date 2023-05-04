import React from "react";
import "./footer.css"
import "./../../App.css"

import logo from "./../../assets/image/logo.png"
import center from "./../../assets/image/center.png"
import mail from "./../../assets/image/mail-link.png"
import phone from "./../../assets/image/Phone-link.png"
import teleg from "./../../assets/image/telegam-link.png"
import vk from "./../../assets/image/vk-link.png"



const Footer = () => {
  return ( 
    <div className="footer-container wrapper">
      <img src={logo} alt="" className="footer-logo"/>
      <div className="footer-center">
        <img src={center} alt="" />
        <h2 className="foorer-title">АГРОПАРК || Вавиловский университет</h2>
        <img src={center} alt="" />
      </div>
      <div className="social-block">
        <a href="mailTo:professor6666@gmail.com" className="soc-link"><img src={mail} alt="" /></a>
        <a href="tel:+79878002670" className="soc-link"><img src={phone} alt="" /></a>
        <a href="tel:+79878002670" className="soc-link"><img src={teleg} alt="" /></a>
        <a href="https://vk.com/insis64" className="soc-link"><img src={vk} alt="" /></a>
      </div>
    </div>
  )
}

export default Footer 

