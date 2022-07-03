import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className=" gpt3__blog-container-article">
      <div className="gpt3__blog-container-article-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="gpt3__blog-article-content"></div>
    </div>
  );
};

export default Article;
