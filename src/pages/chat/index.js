import React from "react";
import "./index.scss";
import Pet from "../../components/pet/container";

const Chat = () => {
  return (
    <main className="chat">
      <div className="chat--content">
        <h2> Chat with me!</h2>
        <Pet />
      </div>
    </main>
  );
};

export default Chat;
