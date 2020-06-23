import React from "react";
import Pet from "../pet";
import "./index.scss";

const PetItem = () => {
  return (
    <div className="pet-item">
      <Pet classes="pet-item--pet" />
      <div className="pet-item--messages">
        <label>Mensaje</label>
      </div>
    </div>
  );
};

export default PetItem;
