import React, {useState} from "react";
import"./header.css"
import "./../../App.css"
import {NavLink} from "react-router-dom";
import logo from "./../../assets/image/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAuth} from "../../redux/slices/authSlice";


const Header = () => {

  const isAuth = useSelector(selectIsAuth)

  const [bull, setBull] = useState(false)

  function openMenu() {
    if (bull) {
      document.documentElement.className=""
      return setBull(false)
    } else {
      document.documentElement.className="block"
      return setBull(true)
    }
  }

  const dispatch = useDispatch()

  const logoutUser = () => {
    if (window.confirm("Выйти?")) {
      dispatch(logout())
      window.localStorage.setItem("tocen", '')
    }
  }

function closeMenu() {
  setBull(false)
  document.documentElement.className=""
}
  return (
    <div className="header-container wrapper" >
      <div className="header-items">
        <div className="header-logo">
        <NavLink to="/">
          <div className="header-image-block">
            <img src={logo} alt="" className="header-img" />
            <span>АГРОПАРК <br /> Вавиловский университет</span>
          </div>
        </NavLink>
        </div>
        <div className={bull?"open navigation-items-block": "navigation-items-block"}>
          <ul className="navigation">
            <li className="navigation-items" onClick={closeMenu}><NavLink to="/" className={a => a.isActive? "linkActive": "link"}>Главная</NavLink></li>
            <li className="navigation-items" onClick={closeMenu}><NavLink to="/news" className={a => a.isActive? "linkActive": "link"}>Новости</NavLink></li>
            <li className="navigation-items" onClick={closeMenu}><NavLink to="/startaps" className={a => a.isActive? "linkActive": "link"}>Стартапы</NavLink></li>
            <li className="navigation-items" onClick={closeMenu}><NavLink to="/services" className={a => a.isActive? "linkActive": "link"}>Услуги</NavLink></li>
            <li className="navigation-items" onClick={closeMenu}><NavLink to="/contacts" className={a => a.isActive? "linkActive": "link"}>Контакты</NavLink></li>
            {isAuth? <li className="navigation-items" onClick={closeMenu}>
              <button className="news-button startaps-link " onClick={logoutUser}>Выйти</button>
            </li>: null }
          </ul>
        </div>
          <div className="button-x" onClick={openMenu}>
            <div className={bull?"button-item button-open":"button-item"}></div>
          </div>
      </div>
    </div>
  )
}

export default Header;