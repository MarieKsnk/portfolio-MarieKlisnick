import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav class="nav_left">
        <ul>
          <li>
            <Link to="/">ACCUEIL</Link>
          </li>
          <li>
            <Link to="/a-propos">A PROPOS</Link>
          </li>
        </ul>
      </nav>
      <h1 class="site-title">Marie Klisnick</h1>
      <nav class="nav_right">
        <ul>
          <li>
            <Link to="/projets">PROJETS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
