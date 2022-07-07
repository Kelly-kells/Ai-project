import React from 'react'
import './footer.css'
import { IoLogoVk } from "react-icons/io";

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
     <div className="gpt3__footer-btn">
       <p>Request Early access</p>
     </div>

     <div className="gpt3__footer-links">
      <div className="gpt3__footer-links__logo">
      <IoLogoVk color="white" fontSize="3rem" />
      <p>Cretchwood 173 waf abigjan</p>
      </div>
     </div>

    </div>
  )
}

export default Footer;