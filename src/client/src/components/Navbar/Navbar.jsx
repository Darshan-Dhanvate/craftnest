import React, { useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[menu, setMenu]= useState("shop");

  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>craft<span>nest</span></p>
      </div>
      
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Custom Creations</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Engineering arts</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>DIY Kits</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'> <button>Login</button> </Link>
        <Link to='/cart'> <img src={cart} alt="" /> </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
