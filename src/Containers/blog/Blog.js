import React from "react";
import "./blog.css";
import { Article } from "../../Components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
const Blog = () => {
  return (
    <div className="gpt3__blog section-padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient-text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gbpt3__blog-container__groupA">
          <Article imgUrl={blog01}
          title="figuring it out together" />

        </div>
        <div className="gbpt3__blog-container__groupB">
          <Article
            imgUrl={blog02}
            date=" june 12 2022"
            title="Let's figure it out together"
          />
         
          
          <Article
            imgUrl={blog03}
            date=" june 12 2022"
            
            title="Let's figure "
          />
       

          
          <Article
            imgUrl={blog04}
            date=" june 12 2022"
            title="Let's figure it out together"
          />
         
         
          

         
          <Article
            imgUrl={blog05}
            date=" june 12 2022"
            title="Let's figure it out together"
          />
          
          </div>
         
        
      </div>
    </div>
  );
};

export default Blog;
