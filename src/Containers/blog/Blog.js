import React from 'react'
import './blog.css'
import {Article} from '../../Components'

const Blog = () => {
  return (
    <div className='gpt3__blog section-padding'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient-text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
       <div className="gbpt3__blog-container__groupA">
    <Article/>
       </div>
       <div className="gbpt3__blog-container__groupB">
       <Article/>
       <Article/>
       <Article/>
       <Article/>
        </div>
        
      </div>
    </div>
  )
}

export default Blog;