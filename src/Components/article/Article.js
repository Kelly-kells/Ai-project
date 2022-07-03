import React from 'react'
import './article.css'

const Article = ({imgUrl}) => {
  return (
    <div className=' gpt3__blog-container-article'>
      <div className="gpt3__blog-container-article-image">
        <img src={imgUrl} alt="" />
      </div>

    </div>
  )
}

export default Article;