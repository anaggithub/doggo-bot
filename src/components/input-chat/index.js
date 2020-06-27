import React from "react";
import "./index.scss";

const InputChat = ({ sendMessage, getMessage }) => {
  return (
    <form className="form" onSubmit={(e) => sendMessage(e)}>
      <input
        className="form--input"
        type="text"
        placeholder="Escribe tu nombre"
        onChange={(e) => getMessage(e.target.value)}
      />
      <button className="form--button" type="submit">
        <i className="fas fa-chevron-right"></i>
      </button>
    </form>
  );
};

export default InputChat;
