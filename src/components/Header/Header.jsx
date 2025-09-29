import React from "react";
import styles from "./Header.module.css";

const Header = ({ title = "FYRA I RAD" }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Hem</a></li>
          <li><a href="/spel">Spela</a></li>
          <li><a href="/regler">Regler</a></li>
          <li><a href="/om">Om oss</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;