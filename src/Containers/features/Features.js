import React from "react";
import { Feature } from "../../Components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },

  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },

  {
    title: "Really boy law county",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient-text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Request Early Access to Get Started</p>
        <div className="gpt3__feature-container">
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default Features;
