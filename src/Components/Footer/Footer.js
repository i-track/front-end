import React from 'react'
import "./Footer.css"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className="social-icons">
        <a href="https://www.facebook.com/"><FaIcons.FaFacebook /></a>
        <a href="https://twitter.com/"><AiIcons.AiOutlineTwitter/></a>
        <a href="https://www.instagram.com/"><AiIcons.AiOutlineInstagram/></a>
        </div>
    </footer>
  )
}

export default Footer
