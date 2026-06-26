import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // estado del menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // cierra el menú cuando se pulsa el link
  };
  return (
    <header>
      <h1 className="header__title">Espai Kapwa</h1>
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
        <NavLink to="/" onClick={handleLinkClick}>
          Inicio 🛖
        </NavLink>
        <NavLink to="/balikbayan" onClick={handleLinkClick}>
          Archivo Balikbayan 📦
        </NavLink>
        <NavLink to="/articles" onClick={handleLinkClick}>
          Artículos 📝
        </NavLink>
        <NavLink to="/resources" onClick={handleLinkClick}>
          Recursos 📚
        </NavLink>
        <NavLink to="/artists" onClick={handleLinkClick}>
          Artistas 🎨
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
