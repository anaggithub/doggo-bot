import React from "react";
import Pet from "../pet";
import "./index.scss";

const PetItem = ({ text }) => {
  return (
    <div className="pet-item">
      <Pet classes="pet-item--pet" />
      <div className="pet-item--messages">
        {text.map((text, index) => (
          <label key={index}>{text}</label>
        ))}
      </div>
    </div>
  );
};

export default PetItem;
