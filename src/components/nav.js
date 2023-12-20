import { CartContext } from "../context/CartContext";
import { NavLink, Link } from "react-router-dom";
import React, { useContext } from "react";
import "./nav.css";

export default function Navbar() {
  let navclass = ({ isActive }) => {
    return `page nav-link ${isActive ? "pageactive" : ""}`;
  };
  let dataFromCartContext = useContext(CartContext);

  return (
    <header id="navbar" class="d-flex fixed-top align-items-baseline gap-md-4">
      <Link
        to="/"
        className="logo d-flex align-items-baseline text-dark text-decoration-none"
      >
        <h3 className="pagelogo">POP</h3>
        <h4 className="pagetitle">Store</h4>
      </Link>

      <ul class="pages nav align-baseline gap-3">
        <li>
          <NavLink to="home" className={navclass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="shop" className={navclass}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className={navclass}>
            About
          </NavLink>
        </li>
      </ul>

      <div className="cart flex align-baseline">
        {dataFromCartContext.Cart < 0 ? 0 : dataFromCartContext.Cart}
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
}
