import React from "react";
import "./parnters.css"

import kvant from "./../../../assets/image/Kvantorium.png"
import sgau from "./../../../assets/image/SGAU.png"
import rost from "./../../../assets/image/rostselmash.png"
import agros from "./../../../assets/image/as_logo.png"
import kirovech from "./../../../assets/image/Kirovsky_Zavod_Logo.svg"
import vim from "./../../../assets/image/logo_MON.png"
import telekom from "./../../../assets/image/ertelecom-logo-800.png"
import fond from "./../../../assets/image/head_logo_fasie.png"

const Partners = () => {
  return (
    <div className="about-container ">
        <div className="wrapper">
        
          <div className="about__partners">
          <h2 className="about__h2-title">Наши партнеры</h2>
            <div className="partners__items">
              <div className="partners__item">
                <a href="https://kvantvavilovsar.ru/">
                  <img className="partners__logo" src={kvant} alt="" />
                </a>
              </div>
              <div className="partners__item">
                <a href="https://www.sgau.ru/">
                  <img className="partners__logo" src={sgau} alt="" />
                </a>
              </div>
              <div className="partners__item">
                <a href="https://rostselmash.com/">
                  <img className="partners__logo" src={rost} alt="" />
                </a>
              </div>
              <div className="partners__item">
                <a href="https://agrosignal.com/">
                  <img className="partners__logo" src={agros} alt="" />
                </a>
              </div>
              <div className="partners__item">
                <a href="https://kirovets-ptz.com/">
                  <img className="partners__logo" src={kirovech} alt="" />
                </a>
              </div>
              <div className="partners__item">
                <a href="https://vim.ru/">
                  <img className="partners__logo" src={vim} alt="" />
                </a>
              </div>
              <div className="partners__item">
                <a href="https://ertelecom.ru/">
                  <img className="partners__logo" src={telekom} alt="" />
                </a>
              </div>
              <div className="partners__item">
                <a href="https://fasie.ru/">
                  <img className="partners__logo" src={fond} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Partners