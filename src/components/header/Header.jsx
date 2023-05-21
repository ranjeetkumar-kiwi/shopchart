import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            OrganicVege
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/product" activeClassName="active" className="nav-links" onClick={handleClick}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/login" activeClassName="active" className="nav-links" onClick={handleClick}>
                Login / Sign Up
              </NavLink>
            </li>
          </ul>

          <div className="cart-icon-mobile">
            <NavLink exact to="/cart" activeClassName="active" className="nav-links" onClick={handleClick}>
              <i className="fas fa-shopping-cart"></i>
              <span className='cart-counter'>1</span>
            </NavLink>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
