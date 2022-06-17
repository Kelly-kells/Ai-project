import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../Components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatGPT3 section-margin' id>
        
    <div className="gpt3__whatGPT3-feature">
      <Feature/>
    </div>
    <div className="gpt3__whatGPT3-heading">
      <h1 className='gradient-text'>
        The Possibilities Are Beyond Your Imagination.
      </h1>
      <p>explore the library</p>
    </div>
    <div className="gpt3__whatGpt3-container">
    <Feature/>
    <Feature/>
    <Feature/>
    </div>
    </div>
  )
}

export default WhatGPT3;