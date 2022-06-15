import React from 'react'
import './brand.css'
import {FcGoogle} from "react-icons/fc"
import {SiSlack} from "react-icons/si"
import {TbBrandAirbnb} from "react-icons/tb"
import {FaShopify} from "react-icons/fa"
import {GrDropbox} from "react-icons/gr"




const Brand = () => {
  return (
    <div className='gpt3__brands section__padding'>
      <div className="gpt3__brands-contents">
        
      <FcGoogle color="white" fontSize="3rem"  />
      <SiSlack color="gray" fontSize="3rem"/>
      < TbBrandAirbnb color="gray" fontSize="3rem"/>
      <FaShopify color="gray" fontSize="3rem"/>
      <GrDropbox color="gray" fontSize="3rem"/>


      </div>



      
    </div>
  )
}

export default Brand;