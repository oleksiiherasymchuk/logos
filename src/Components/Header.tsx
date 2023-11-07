import React from "react";
import styles from "./Components.module.css";
import { Outlet, NavLink } from "react-router-dom";
import style from "./Components.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <NavLink
        to="/todos"
        // className={(isActive) => (isActive ? `${style.activeLink}` : "")}
        className={({ isActive }) => (isActive ? style.activeLink : "")}
      >
        Todos
      </NavLink>
      <NavLink
        to="/albums"
        // className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
        // className={(isActive) => (isActive ? `${style.activeLink}` : "")}
        className={({ isActive }) => (isActive ? style.activeLink : "")}
      >
        Albums
      </NavLink>
      <NavLink
        to="/comments"
        // className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
        // className={(isActive) => (isActive ? `${style.activeLink}` : "")}
        className={({ isActive }) => (isActive ? style.activeLink : "")}
      >
        Comments
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Header;
