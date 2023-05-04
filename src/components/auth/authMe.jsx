import React from "react";
import "./authMe.css"
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData, selectIsAuth} from "../../redux/slices/authSlice";
import {Navigate} from "react-router-dom";

const AuthMe = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  console.log(isAuth)

  const {register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchUserData(values));
    console.log(data)

    if (!data.payload) {
      return alert("Не удалось авторизоваться!")
    }

    if ("tocen" in data.payload) {
      window.localStorage.setItem("tocen", data.payload.tocen)
    }
  }

  if (isAuth) {
    return <Navigate to="/news" />
  }

  return (
    <div className="auth">
      <div className="wrapper">
        <div className="auth-container">
          <h1 className="auth-title">Авторизация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-block">
              <label htmlFor="email">Логин</label>
              <input type="email" id="email" name="email" {...register("email", {required: "Укажите почту"})}/>
            </div>
            <div className="input-block">
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" name="password" {...register("password", {required: "Укажите почту"})} />
            </div>
            <button type="submit" className="button">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthMe;