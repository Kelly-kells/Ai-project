import React from "react";
import "./possibility.css";
import possiImage from "../../assets/Images/possiImage.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possiImage} alt="" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Restart the future</h4>
        <h1>The Possibilities Are Beyond Your Imagination</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
      </div>
    </div>
  );
};

export default Possibility;
