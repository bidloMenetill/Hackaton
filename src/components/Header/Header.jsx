import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className={style.header}>
      <section className={style.section}>
        <nav>
          <ul className={style.ul}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${style.menu_item} ${style.active_link}`
                    : style.menu_item
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? `${style.menu_item} ${style.active_link}`
                    : style.menu_item
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prediction"
                className={({ isActive }) =>
                  isActive
                    ? `${style.menu_item} ${style.active_link}`
                    : style.menu_item
                }
              >
                Predict
              </NavLink>
            </li>
            <button className={style.btn}>Бесплатный Аудит</button>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
