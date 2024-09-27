import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout({user}) {
  return (
    <>
      <nav>
        <div>
          <ul style={{display: "flex", gap: "20px", listStyle: "none"}}>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <Link to={"/posts"}>Посты</Link>
            </li>
            <li>
              <Link to={"/categories"}>Категории</Link>
            </li>
            <li>
              <Link to={"/login"}>Авторизация</Link>
            </li>
            <li>
              <Link to={"/reg"}>Регистрация</Link>
            </li>
            <li>
              {
                user ? "Привет, " + user.email : null
              }
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
