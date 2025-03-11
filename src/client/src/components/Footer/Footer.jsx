import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo.jpg'
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>craftnest</p>
      </div>

      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <FaInstagram />
        </div>

        <div className="footer-icons-container">
            <FaPinterest />
        </div>

        <div className="footer-icons-container">
            <IoLogoWhatsapp />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>copyright @2025 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
