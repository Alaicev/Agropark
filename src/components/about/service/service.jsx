import React from "react";
import "./servise.css"
import "./../../../App.css"
import {NavLink} from "react-router-dom";

const Service = () => {
  return (
    <div className="servises-block">
       <div className="about__service wrapper">
            <h2 className="about__h2-title">Мы предлагаем</h2>
            <div className="service__items">
              <div className="service__item">
                <h3 className="service__title">Разработка VR/AR</h3>
                <p className="service__info">Создание приложений дополненной и виртуальной реальностей. Видео/фотосъёмка в формате 360°</p>
                <NavLink className="services__link" to="/services#vr">Подробнее</NavLink>
              </div>
              <div className="service__item">
                <h3 className="service__title">Станочная обработка</h3>
                <p className="service__info">Лазерный маркер и гравёр. Токарная и фрезерная обработки. Различные виды материалов для Вас</p>
                <NavLink className="services__link" to="/services#laser">Подробнее</NavLink>
              </div>
              <div className="service__item">
                <h3 className="service__title">Образовательные курсы</h3>
                <p className="service__info">Робототехника. Arduino IDE Программирование. Unity / Unreal Engine 3D-моделирование. Blender / Cinema 4D</p>
                <NavLink className="services__link" to="/services#course">Подробнее</NavLink>
              </div>
              <div className="service__item">
                <h3 className="service__title">Прототипирование</h3>
                <p className="service__info">Создание 3D-моделей на заказ. Печать Ваших деталей на современном оборудовании</p>
                <NavLink className="services__link" to="/services#3d">Подробнее</NavLink>
              </div>
            </div>
          </div>
    </div>
     
  )
}

export default Service