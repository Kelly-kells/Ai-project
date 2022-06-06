import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import{IoLogoVk} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <IoLogoVk color="white" fontSize="3rem"/>
        </div>
        <div className="gpt3__navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibillity">Open Ai</a></p>
          <p><a href="#features">Case studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>

      </div>

    </div>
  )
}

export default Navbar;