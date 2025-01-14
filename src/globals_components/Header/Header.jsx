import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">À propos</Link></li>
          <li><Link to="/projets">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
