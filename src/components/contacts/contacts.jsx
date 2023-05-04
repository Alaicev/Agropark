import React from "react";
import "./contacts.css"
import "./../../App.css"
import logo from "./../../assets/image/logo.png"

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="wrapper">
        <div className="contacts-container">
          <h2 className="contacts-title">Контактная информация</h2>
            <div className="contacts-grid-block">
              <div className="image-contact-container">
                <img src={logo} alt="" className="logo-contacts"/>
              </div>
              <div className="contact-info-first-column contacts-col">
                <ul className="contacts-first-list">
                  <li className="contacts-first-item col-text"><span>Адрес:</span> г. Саратов, ул. Советская, д. 60в</li>
                  <li className="contacts-first-item col-text"><span>График работы:</span> Понедельник - пятница: 10:00-15:00</li>
                  <li className="contacts-first-item col-text"><span>Email:</span> <a href="mailto:vr.technum@gmail.com">vr.technum@gmail.com</a></li>
                  <li className="contacts-first-item col-text"><span>Телефон:</span> <a href="tel:89878002670">+7 (987) 800-26-70</a></li>
                </ul>
              </div>
              <div className="contacts-second-column contacts-col ">
                <div className="contacts-second-block">
                  <p className="contacts-1name col-text"><span>Руководитель центра</span></p>
                  <p className="contacts-2name col-text">Гончаров Роман Дмитревич</p>
                  <ul className="contacts-second-list">
                    <li className="contacts-second-itemc col-text"><span>Email:</span> <a href="mailto:professor6666@gmail.com">professor6666@gmail.com</a></li>
                    <li className="contacts-second-item col-text"><span>Телефон:</span> <a href="tel:89878002670">+7 (987) 800-26-70</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contacts-map">
              
            </div>
        </div>
      </div>
    </div>
  )
};

export default Contacts;