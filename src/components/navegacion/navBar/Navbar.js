
import './navBar.scss';
// react
import React from 'react';
import { Link } from "react-router-dom";
// icono carrito
import Iconshopcart from '../cartWidget/CartWidget'

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg nav__bar--modificacion nav__bar--size nav__bar--color" id="navBar">
        <div className="navBarSection">
          <Link className="navbar-brand nav__bar__logo--modificacion nav__bar__logo--size nav__bar__logo--color" id="navBarLogo" to="/">Logo</Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navBarSectionItems">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item"  to="/categoria/Productos">Productos</Link></li>
                  <li><Link className="dropdown-item"  to="/categoria/Hogar">Hogar</Link></li>
                  <li><Link className="dropdown-item"  to="/categoria/Organizadores">Organizadores</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Encargo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Carrito"><Iconshopcart/></Link>
              </li>
            </ul>
            <span className="navbar-text textNavbar">
              3DShop
            </span>
          </div>
        </div>
      </nav>
      );
}

export default Navbar;
