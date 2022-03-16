
import '../../scss/navBar.scss';
import React from 'react';
// icono carrito
import Iconshopcart from './CartWidget'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg nav__bar--modificacion nav__bar--size nav__bar--color" id="navBar">
        <div className="navBarSection">
          <a className="navbar-brand nav__bar__logo--modificacion nav__bar__logo--size nav__bar__logo--color" id="navBarLogo" href="index.html">Logo</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navBarSectionItems">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categorias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Encargo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Iconshopcart/></a>
              </li>
            </ul>
            <span className="navbar-text">
              3DShop
            </span>
          </div>
        </div>
      </nav>
      );
}

export default Navbar;