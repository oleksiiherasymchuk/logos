import React from "react";
import styles from "./Components.module.css";
import { NavLink } from "react-router-dom";
import style from './Components.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink
        to="/todos"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
      >
        Todos
      </NavLink>
      <NavLink
        to="/albums"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
      >
        Albums
      </NavLink>
      <NavLink
        to="/comments"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
      >
        Comments
      </NavLink>
    </div>
  );
};

export default Header;
