import React from "react";
import "./index.scss";

const InputChat = () => {
  return (
    <form className="form">
      <input
        className="form--input"
        type="text"
        placeholder="Escribe tu nombre"
      />
      <button className="form--button" type="submit">
        <i className="fas fa-chevron-right"></i>
      </button>
    </form>
  );
};

export default InputChat;
