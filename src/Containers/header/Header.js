import React from 'react'
import './header.css'
import people from "../../assets/Images/people.png"
import robo from "../../assets/Images/robo.png"

const Header = () => {
  return (
    <div className='gpt3__header section-padding' id='Home'>
      <div className="gpt3__header-content">
        <h1 className='gradient-text'>
          Let's build something amazing with GPT3 open ai
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type="button"> Get started</button>
        </div>
        <div className="gpt3__header-content-people">
  <img src={people}alt="" />
  <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

        <div className="gpt3__header-image">
          <img src={robo} alt="" />
        </div>
      </div>
      
      
      
      </div>
  )
}

export default Header; 