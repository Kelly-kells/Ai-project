
import React from 'react'
import {Article,Brand,Cta,Feature,Navbar} from'./Components'

import './index.css'


const App = () => {
  return (
    <div  className='bg-slate-400'>
      <Article/>
      <Brand/>
      <Cta/>
      <Feature/>
      <Navbar/>
     
    </div>
  )
}

export default App
