import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ title, navLinks }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks &&
            navLinks.map((navlink, i) => {
              if (navlink) {
                return (
                  <li key={i}>
                    <NavLink to={`/${navlink.path}`}>{navlink.name}</NavLink>
                  </li>
                );
              }
            })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
