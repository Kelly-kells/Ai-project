import React from "react";
import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoLogoVk } from "react-icons/io";



const Navbar = () => {


  
  const[toggleMenu, setTogleMenu]=useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <IoLogoVk color="white" fontSize="3rem" />
        </div>
        <div className="gpt3__navbar-links-container">
          <p>
            <a href="#home">Home</a> </p>
          <p>
            <a href="#wgpt3">About</a></p>
          <p>
            <a href="#possibillity">Open Ai</a> </p>
          <p>
            <a href="#features">Case studies</a> </p>
          <p> <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
         {toggleMenu ? <RiCloseLine color="white" size={27} onClick={()=> setTogleMenu(false)} />
         : < RiMenu3Line color="white" size={27} onClick={()=> setTogleMenu(true)} />}
         {toggleMenu &&(
           <div className="gpt3__navbar-menu-container scale-up-center">
             <div className="gpt3__navbar-menu-container-links">
             <p>
            <a href="#home">Home</a> </p>
          <p>
            <a href="#wgpt3">About</a></p>
          <p>
            <a href="#possibillity">Open Ai</a> </p>
          <p>
            <a href="#features">Case studies</a> </p>
          <p> <a href="#blog">Library</a>
          </p>
             </div>
           </div>
         )}
      </div>
    </div>

  );
};

export default Navbar;
