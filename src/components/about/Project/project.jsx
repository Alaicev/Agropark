import React, { useState } from "react";
import "./../../../App.css"
import "./project.css"
import Item from "./banner-item/item";

import bl from "../../../assets/image/Belarus.jpg"
import bl1 from "../../../assets/image/Belarus-1.jpg"
import bl2 from "../../../assets/image/Belarus-2.jpg"
import bl3 from "../../../assets/image/Belarus-3.jpg"

import KR1 from "../../../assets/image/KRS-1.png"
import KR2 from "../../../assets/image/KRS-2.png"
import KR3 from "../../../assets/image/KRS-3.png"
import KR4 from "../../../assets/image/KRS-4.png"

import OD1 from "../../../assets/image/OD-1.png"
import OD2 from "../../../assets/image/OD-2.png"
import OD3 from "../../../assets/image/OD-3.png"
import OD4 from "../../../assets/image/OD-4.png"


const Projects = () => {

  let arrayItems = [
    {
      title: "VR-тренажер. Разработка технологий виртуальной реальности для обучения студентов по обслуживанию трактора «Беларус-1523",
      text: "Программа предназначена для разработки виртуального тренажера трактора Беларус-1523. Посредством компьютера формируется виртуальное пространство, в котором объекты, например, деревья, облака, стены домов отображаются при перемещении пользователя. Приложение предназначено для технического обслуживания сельскохозяйственной техники с использованием системы информационного обеспечения с применением виртуальной реальности. Осуществляет внедрение современных информационных технологий для проведения своевременного технического обслуживания и качественного ремонта сельскохозяйственной техники. Даёт возможность студенту проводить ЕТО и преподавателю отслеживать проведение ежесменного технического обслуживания сельскохозяйственной техники. Программа может быть использована как элемент цифровой автоматизированной системы проведения ЕТО и ТО-1. Тип ЭВМ: IBM PC-совмест. ПК; ОС: Windows 10.",
      images:[bl, bl1, bl2, bl3],
      _id: 1
    },
    {
      title: "Vr-тренажер. Диагностика патологического состояния молочной железы у КРС",
      text: "Программа предназначена для обучения диагностике патологического состояния молочной железы у КРС, с применением технологий виртуальной реальности. Посредством компьютера формируется виртуальное пространство, в котором объекты, например, деревья, облака, стены домов отображаются при перемещении пользователя. Приложение для диагностики патологического состояния молочной железы у КРС с использованием системы информационного обеспечения с применением виртуальной реальности. Внедрение современных информационных технологий для обучения диагностике патологий молочной железы у КРС. Возможность студенту обследовать молочную железу крупного рогатого скота и преподавателю отслеживать проведение диагностики. Программа может быть использована как элемент обучения студентов по направлению подготовки «Ветеринария». Тип ЭВМ: IBM PC совмест. ПК; ОС: Windows 10 Pro.",
      images:[KR1, KR2, KR3, KR4],
    },
    {
      title: "VR-тренажер. Программа для разработки виртуального тренажера по обрезке деревьев",
      text: "Программа предназначена для обучения обрезке деревьев с применением виртуальной реальности. Посредством компьютера формируется виртуальное пространство, в котором объекты, например, деревья, облака, трава, инструменты отображаются при перемещении пользователя. Программа обеспечивает возможность студенту проводить обрезку яблонь для формирования кроны типа «шпиндель», а преподавателю - отслеживать действия обучающегося в виртуальном пространстве. Программа может быть использована как обучающее пособие при подготовке кадров в сфере растениеводства. Тип ЭВМ: IBM PC совмест. ПК; ОС: Windows 10 Pro.",
      images:[OD1, OD2, OD3, OD4],
    },
  ]

  let [sckoll, setScroll] = useState(0)
  let [index, setIndex] = useState(0)

  function prev() {
    return setIndex(index-1)
  }
  function next() {
    return setIndex(index+1)
  }

  let translate = {
    transform: `translateX(-${100/arrayItems.length*index}%)`,
    width: `${(arrayItems.length)*100}%`
  }

  let backPos = {
    backgroundPosition: `100px ${sckoll*0.4 - 500}px `
  }
  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })



  return (
    <div className="project" style={backPos}>
      <div className="wrapper">
        <div className="project-container">
          <h2 className="project-title about__h2-title">Наши проекты</h2>
          <div className="carusel-container">
            <div className="visual-block" >
              <div className="flex-container" style={translate} >
                {arrayItems.map((e, i) => <Item prop={e} key={i}/>)}
              </div>
            </div>
            <div className="button-corusel-container">
              <button className="perv button-carusel" onClick={prev} disabled={index<=0? true: false}>&#8249;</button>
              <button className="next button-carusel" onClick={next} disabled={index>=arrayItems.length-1? true: false}>&#8250;</button>
            </div>
          </div>
          <div className="triger-container">
            {arrayItems.map((e, i) =>
              <button className={index === i? "triger-button triger-active" : "triger-button"}  id={i} key={i}></button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects