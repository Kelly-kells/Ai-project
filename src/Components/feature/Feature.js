import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature">
        <p> {text}</p>
      </div>
      <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <IoLogoVk color="white" fontSize="3rem" />
        </div>
        <div className="gpt3__navbar-links-container">
          <Menu />
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
             <Menu />

          <div className="gpt3__navbar-menu-container-links-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
             </div>
           </div>
         )}
      </div>
    </div>
    </div>

    
  );
};

export default Feature;
