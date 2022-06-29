import React from "react";
import "./possibility.css";
import possiImage from "../../assets/Images/possiImage.png";

const Possibility = () => {
  return (
    <div className="gpt__possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possiImage} alt="" />
      </div>

      <div className="gpt3__possibility-content"></div>
    </div>
  );
};

export default Possibility;
