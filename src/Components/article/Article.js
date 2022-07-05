import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className=" gpt3__blog-container-article">
      <div className="gpt3__blog-container-article-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="gpt3__blog-article-content">
        <p>{date}</p>
        <h2>{title}</h2>
        <p>Read more..</p>
      </div>
    </div>
  );
};

export default Article;
