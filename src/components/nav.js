import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'
import React, { useContext } from "react"
import "./nav.css";

export default function Navbar() {

  let navclass = ({ isActive }) => { return `page nav-link ${isActive ? 'pageactive' : ''}` }
  let dataFromCartContext = useContext(CartContext)

  return (

    <header id='navbar' class="d-flex fixed-top flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom">

      <a href="/" className="logo d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <h3 className='pagelogo'>POP</h3>
        <h4 className='pagetitle'>Store</h4>
      </a>

      <ul class="pages nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="home" className={navclass}>Home</NavLink></li>
        <li><NavLink to="shop" className={navclass}>Shop</NavLink></li>
        <li><NavLink to="about" className={navclass}>About</NavLink></li>
      </ul>

      <div class="btns col-md-3 text-end">
        <button type="button" class="navbtn">Login</button>
        <button type="button" class="navbtn">Sign-up</button>
        <p className="cart">{dataFromCartContext.Cart < 0 ? 0 : dataFromCartContext.Cart}</p>
      </div>

    </header>

  )
}