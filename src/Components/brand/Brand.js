import React from 'react'
import './brand.css'
import {FcGoogle} from "react-icons/fc"
import {SiSlack} from "react-icons/si"
import {TbBrandAirbnb} from "react-icons/tb"
import {ImTwitch} from "react-icons/im"


const Brand = () => {
  return (
    <div className='gpt3__brands'>
      <div className="gpt3__brands-contents">
        
      <FcGoogle color="white" fontSize="4rem" />
      <SiSlack color="gray" fontSize="4rem"/>
      < TbBrandAirbnb color="gray" fontSize="4rem"/>
      <ImTwitch color="gray" fontSize="4rem"/>

      </div>



      
    </div>
  )
}

export default Brand;