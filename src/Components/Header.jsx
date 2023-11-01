import React from "react";
import styles from "./Components.module.css";
import { Link, Outlet } from "react-router-dom";
import style from "./Components.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link
        to="/todos"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
      >
        Todos
      </Link>
      <Link
        to="/albums"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
      >
        Albums
      </Link>

      <Link
        to="/comments"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
      >
        Comments
      </Link>
      <Outlet />
    </div>
  );
};

export default Header;
